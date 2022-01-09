import { Formik, Form, Field, useFormik } from "formik";
import { useRef, useState } from "react";

const Spinwheel = () => {
  const wheel = useRef(null);
  const userForm = useRef(null);
  const bank = useRef(null);

  const [points, setPoints] = useState(2);

  let num = Math.ceil(Math.random() * 10000);
  const spinwheel = () => {
    setPoints((prev) => {
      if (prev > 0) {
        wheel.current.style.transform = `rotate(${num}deg)`;
        num += Math.ceil((Math.random() * 10000) / 2);
        return prev - 1;
      } else {
        alert("נגמרו לך הספינים!!");
        return 0;
      }
    });
  };

  const formSubmit = async (values) => {
    userForm.current.style.display = "none";
    bank.current.style.display = "block";
    // await new Promise((resolve) => setTimeout(resolve, 500));
    // alert(JSON.stringify(values, null, 2));
  };

  // wheel items list
  const wheellist = [
    { text: "חמישה אחוזים", deg: "45", col: "bg-orange-300" },
    { text: "עשר אחוז", deg: "90", col: "bg-orange-400" },
    { text: "עשרים אחוז", deg: "135", col: "bg-orange-500" },
    { text: "ארבעים אחוז", deg: "180", col: "bg-orange-200" },
    { text: "שישים אחוזים", deg: "225", col: "bg-orange-300" },
    { text: "שמונים אחוז", deg: "270", col: "bg-orange-400" },
    { text: "מאה אחוז", deg: "315", col: "bg-orange-500" },
  ];

  return (
    <section
      style={{
        backgroundImage:
          "linear-gradient(rgba(253, 133, 0, 0.35), rgba(139, 92, 246, 0.6)),url(imgs/animated.svg)",
      }}
      className="py-16 bg-cover bg-no-repeat"
    >
      <div className="mycontainer">
        <h2
          className="text-center font-extrabold text-5xl  bg-clip-text text-transparent
           bg-gradient-to-r from-pink-400 to-[#ff6600]"
        >
          קרוסלת המזל
        </h2>
        <p className="text-center text-sm font-medium">
          סובבו את <span className="text-[#ff6600]">הקרוסלה</span> ובדקו אם יש
          לכם מזל
        </p>
        <div className="flex flex-col lg:flex-row w-full mt-8 justify-center items-center">
          {/* userform */}
          <Formik
            initialValues={{ fname: "", lname: "", email: "" }}
            onSubmit={formSubmit}
          >
            <Form ref={userForm} className="w-full lg:w-1/2 lg:mt-16">
              <div className="flex flex-col md:flex-row justify-between">
                <div className="flex flex-col w-full md:w-1/2 md:mr-1">
                  <label htmlFor="fname" className="input-label">
                    השם הפרטי שלך:
                  </label>
                  <Field
                    type="text"
                    name="fname"
                    id="fname"
                    placeholder="ג'ון"
                    className="input"
                  />
                </div>
                <div className="flex flex-col w-full md:w-1/2 md:ml-1">
                  <label htmlFor="lname" className="input-label">
                    שם משפחתך:
                  </label>
                  <Field
                    type="text"
                    name="lname"
                    id="lname"
                    placeholder="צְבִיָה"
                    className="input"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="input-label">
                  כתובת הדוא"ל שלך:
                </label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  placeholder="ג'ון@דוגמא.עם"
                  className="input"
                />
              </div>

              <div className="flex flex-row mt-2">
                <button type="reset" className="btn-secondary">
                  אִתחוּל
                </button>
                <button type="submit" className="btn-primary">
                  סובב קרוסלה
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
              border-[15px] rounded-full bg-white outline outline-2 outline-[#ff6600]
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
                אחוז אחד
              </div>
              {wheellist.map((val, i) => {
                return <Wheel props={{ val }} key={i} />;
              })}

              <div className="w-full h-full border-2 rounded-full border-dashed border-red-500 z-10 absolute"></div>
            </div>

            <div ref={bank} className="hidden">
              <LuckBank spin={spinwheel} points={points} />
            </div>
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
      <div className="w-64 mx-auto mt-4 rounded-md overflow-hidden">
        <div className="bg-white p-2">
          <h3 className="text-[#ff6600] font-semibold text-lg text-center">
            לסובב את הונו
          </h3>
        </div>
        <div className="bg-primary py-2">
          <h3 className="text-white font-semibold text-lg text-center">
            נקודות שנותרו:
          </h3>
          <p className="text-white font-semibold text-lg text-center">
            {points}
          </p>
        </div>
        <div className="bg-white p-2">
          <button className="btn-primary w-full" onClick={spin}>
            סיבוב
          </button>
        </div>
      </div>
    </>
  );
};

export default Spinwheel;
