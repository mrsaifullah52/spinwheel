import { Formik, Form, Field } from "formik";
import { useRef, useState, useEffect } from "react";
import { getCookie } from "cookies-next";
import Image from "next/image";
import headline from "../../public/imgs/headline.png";
import logo from "../../public/imgs/kolot_logo.png";
import wheelimg from "../../public/imgs/wheel.png";

const Spinwheel = () => {
  const wheel = useRef(null);
  const innerWheel = useRef(null);
  const wheelImg = useRef(null);
  const userForm = useRef(null);
  const bank = useRef(null);

  const [points, setPoints] = useState(5);
  const spinwheel = () => {
    let num = Math.random() * (110 - 20) + 20;
    setPoints((prev) => {
      if (prev > 0) {
        innerWheel.current.style.transform = `rotate(16000deg)`;
        setTimeout(() => {
          innerWheel.current.style.transform = `rotate(-${num}deg)`;
        }, 5000);

        return prev - 1;
      } else {
        bank.current.style.display = "none";
        return 0;
      }
    });
  };

  useEffect(() => {
    const email = getCookie("email");
    //if user exist
    if (email) {
      userForm.current.style.display = "none";
      wheelImg.current.style.display = "none";

      bank.current.style.display = "block";
      wheel.current.style.display = "block";
      async () => {
        const res = await fetch(`/api/user/${email}`);
        console.log(res);
        setPoints(res);
      };
    }
  }, []);

  // submit data
  const formSubmit = async (values) => {
    const response = await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify(values),
    });
    if (response.status == 201 || response.status == 409) {
      userForm.current.style.display = "none";
      wheelImg.current.style.display = "none";
      wheel.current.style.display = "block";
      bank.current.style.display = "block";
    } else {
      console.log("error");
    }
  };

  // wheel items list
  const wheellist = [
    { text: "5%", deg: "45", col: "bg-orange-300", txt: 16 },
    { text: "10%", deg: "90", col: "bg-orange-400", txt: 20 },
    { text: "20%", deg: "135", col: "bg-orange-500", txt: 24 },
    { text: "40%", deg: "180", col: "bg-orange-200", txt: 28 },
    { text: "50%", deg: "225", col: "bg-orange-300", txt: 32 },
    { text: "70%", deg: "270", col: "bg-orange-400", txt: 36 },
    { text: "100%", deg: "315", col: "bg-orange-500", txt: 40 },
  ];

  return (
    <section className="py-8 md:py-16 bg-cover bg-no-repeat">
      <div className="mycontainer">
        <div className="flex flex-col lg:flex-row w-full mt-8 justify-center items-center">
          {/* userform */}
          <Formik
            initialValues={{
              name: "",
              city: "",
              phone: "",
              email: "",
            }}
            onSubmit={formSubmit}
          >
            <Form ref={userForm} className="w-full lg:w-1/2">
              <div className="w-[250px] md:w-[350px] overflow-hidden mx-auto ">
                <Image
                  src={headline}
                  className="w-full h-full inline-block"
                  alt="headline"
                />
              </div>

              <div className="flex flex-col md:flex-row justify-between">
                <div className="flex flex-col w-full md:w-1/2 md:ml-1">
                  <label htmlFor="name" className="input-label">
                    שם מלא:
                  </label>
                  <Field
                    type="text"
                    name="name"
                    id="name"
                    placeholder="John Doe"
                    className="input"
                    required={true}
                  />
                </div>
                <div className="flex flex-col w-full md:w-1/2 md:mr-1">
                  <label htmlFor="city" className="input-label">
                    ישוב:
                  </label>
                  <Field
                    type="text"
                    name="city"
                    id="city"
                    placeholder="Hadera"
                    className="input"
                    required={true}
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between">
                <div className="flex flex-col w-full md:w-1/2 md:ml-1">
                  <label htmlFor="phone" className="input-label">
                    טלפון:
                  </label>
                  <Field
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="03-6500031"
                    className="input"
                    required={true}
                    pattern="[0-0]{1}[5-5]{1}-[0-9]{8}"
                  />
                </div>

                <div className="flex flex-col w-full md:w-1/2 md:mr-1">
                  <label htmlFor="email" className="input-label">
                    דואר אלקטרוני:
                  </label>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    placeholder="john@example.com"
                    className="input"
                    required={true}
                  />
                </div>
              </div>

              <div className="flex flex-row mt-2">
                <button type="reset" className="btn-secondary">
                  נקה טופס
                </button>
                <button type="submit" className="btn-primary">
                  שלח והתחל משחק
                </button>
              </div>
            </Form>
          </Formik>

          {/* image */}
          <div className="" ref={wheelImg}>
            <Image src={wheelimg} alt="spinwheel" />
          </div>

          {/* spinwheel */}
          <div
            ref={wheel}
            className="w-full  my-4 lg:w-1/2 lg:ml-4 relative p-2 hidden overflow-hidden"
          >
            <div className="w-[120px] h-[120px] md:w-[190px] md:h-[190px] z-20 absolute left-[50%] top-[20%] transform -translate-x-1/2 -translate-y-[20%]">
              <Image src={logo} alt="logo" className="w-full h-full" />
            </div>
            <div
              ref={innerWheel}
              className="relative w-[270px] h-[270px] md:w-[380px] md:h-[380px]
              overflow-hidden 
              border-[15px] border-[#ff6600] rounded-full bg-white outline outline-2 outline-orange-800
              shadow-inner"
              style={{
                transition: "5s",
                margin: "0 auto",
              }}
            >
              <div
                className={`bg-orange-200 triangle left-32 md:left-44 text-white font-bold`}
                style={{
                  clipPath: "polygon(100% 0, 50% 100%, 0 0)",
                  writingMode: "vertical-lr",
                }}
              >
                0% הנחה
              </div>
              {wheellist.map((val, i) => {
                return <Wheel props={{ val }} key={i} />;
              })}

              <div className="w-full h-full border-2 rounded-full border-dashed border-orange-800 z-10 absolute "></div>
            </div>

            <div ref={bank} className="hidden">
              <LuckBank spin={spinwheel} points={points} />
            </div>
            {points <= 0 ? (
              <p className="text-center mt-4">
                נגמרו לך ניסויי ספין, שקול את האפשרויות הבאות כדי לקבל יותר
                סיכוי.
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Wheel = ({ props }) => {
  const { text, deg, col, txt } = props.val;
  return (
    <>
      <div
        className={`${col} triangle text-white font-bold text-sm md:text-base`}
        style={{
          transform: `rotate(${deg}deg)`,
          clipPath: "polygon(100% 0, 50% 100%, 0 0)",
          writingMode: "vertical-rl",
        }}
      >
        {text} הנחה
      </div>
    </>
  );
};

const LuckBank = ({ spin, points }) => {
  return (
    <>
      <div className="bg-gray-50 w-60 md:w-64 mx-auto mt-4 rounded-md overflow-hidden border-[#ff6600] border-2">
        <div className="bg-gray-50 p-2">
          <h3 className="text-[#ff6600] font-semibold text-lg text-center">
            לסובב את הונו
          </h3>
        </div>
        <div className="bg-primary py-2">
          <h3 className="text-white font-semibold text-lg text-center">
            הגבול שנותר:
          </h3>
          <p className="text-white font-semibold text-lg text-center">
            {points}
          </p>
        </div>
        <div className="bg-gray-50 p-2">
          <button className="btn-primary w-56 mx-auto" onClick={spin}>
            סיבוב
          </button>
        </div>
      </div>
    </>
  );
};

export default Spinwheel;
