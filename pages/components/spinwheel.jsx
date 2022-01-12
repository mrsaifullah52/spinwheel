import { Formik, Form, Field } from "formik";
import { useRef, useState, useEffect } from "react";
import { getCookie } from "cookies-next";
import Image from "next/image";
import headline from "../../public/imgs/headline.png";

const Spinwheel = () => {
  const wheel = useRef(null);
  const userForm = useRef(null);
  const bank = useRef(null);

  const [points, setPoints] = useState(5);
  const spinwheel = () => {
    let num = Math.random() * (110 - 20) + 20;
    setPoints((prev) => {
      if (prev > 0) {
        wheel.current.style.transform = `rotate(16000deg)`;
        setTimeout(() => {
          wheel.current.style.transform = `rotate(-${num}deg)`;
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
      bank.current.style.display = "block";
      async () => {
        const res = await fetch(`/api/user/${email}`);
        console.log(res.basic);
        // setPoints(res.basic);
      };
    }
  }, []);

  // submit data
  const formSubmit = async (values) => {
    const response = await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify(values),
    });
    if (response.status == 201) {
      userForm.current.style.display = "none";
      bank.current.style.display = "block";
    } else if (409) {
      userForm.current.style.display = "none";
      bank.current.style.display = "block";
    } else {
      console.log("error");
    }
  };

  // wheel items list
  const wheellist = [
    { text: "5%", deg: "45", col: "bg-orange-300" },
    { text: "10%", deg: "90", col: "bg-orange-400" },
    { text: "20%", deg: "135", col: "bg-orange-500" },
    { text: "40%", deg: "180", col: "bg-orange-200" },
    { text: "50%", deg: "225", col: "bg-orange-300" },
    { text: "70%", deg: "270", col: "bg-orange-400" },
    { text: "100%", deg: "315", col: "bg-orange-500" },
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
                    Your Full Name:
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
                    Your City:
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
                    Your Phone Number:
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
                    Your Email Address:
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
                  Clear
                </button>
                <button type="submit" className="btn-primary">
                  Submit
                </button>
              </div>
            </Form>
          </Formik>

          {/* spinwheel */}
          <div className="w-full  my-4 lg:w-1/2 lg:ml-4 overflow-hidden relative p-2">
            <div
              className="w-8 h-12 bg-primary z-20 absolute left-[50%] transform -translate-x-1/2 shadow-xl"
              style={{
                clipPath: "polygon(100% 0, 50% 100%, 0 0)",
              }}
            >
              <div className="absolute bg-white w-2 h-2 left-1/2 transform -translate-x-1/2 rounded-full"></div>
            </div>
            <div
              ref={wheel}
              className="overflow-hidden relative w-[270px] h-[270px] md:w-[380px] md:h-[380px]
              border-[15px] border-white rounded-full bg-white outline outline-2 outline-[#ff6600]
              shadow-inner"
              style={{
                transition: "5s",
                margin: "0 auto",
              }}
            >
              <div
                className={`bg-orange-200 triangle left-32 md:left-44`}
                style={{
                  clipPath: "polygon(100% 0, 50% 100%, 0 0)",
                }}
              >
                0%
              </div>
              {wheellist.map((val, i) => {
                return <Wheel props={{ val }} key={i} />;
              })}

              <div className="w-12 h-12 bg-white border-2 rounded-full border-dashed border-red-500 z-30 absolute left-[50%] top-[50%] transform -translate-x-1/2 -translate-y-1/2"></div>

              <div className="w-full h-full border-2 rounded-full border-dashed border-red-500 z-10 absolute "></div>
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
  const { text, deg, col } = props.val;
  return (
    <>
      <div
        className={`${col} triangle`}
        style={{
          transform: `rotate(${deg}deg)`,
          clipPath: "polygon(100% 0, 50% 100%, 0 0)",
        }}
      >
        {text}
      </div>
    </>
  );
};

const LuckBank = ({ spin, points }) => {
  return (
    <>
      <div className="bg-gray-50 w-60 md:w-64 mx-auto mt-4 rounded-md overflow-hidden">
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

// export async function getServerSideProps() {
//   // get the current environment
//   let dev = process.env.NODE_ENV !== "production";
//   let { DEV_URL, PROD_URL } = process.env;

//   const response = await fetch(`${dev ? DEV_URL : PROD_URL}/api/user/`);
// }
