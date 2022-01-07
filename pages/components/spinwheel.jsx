import { Formik, Form, Field, useFormik } from "formik";
import { useRef } from "react";

const Spinwheel = () => {
  const wheel = useRef(null);
  let num = Math.ceil(Math.random() * 10000);
  const spinwheel = () => {
    wheel.current.style.transform = `rotate(${num}deg)`;
    num += Math.ceil(Math.random() * 10000);
  };

  const formSubmit = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    alert(JSON.stringify(values, null, 2));
    spinwheel();
  };

  return (
    <section
      style={{
        backgroundImage:
          "linear-gradient(rgba(139, 92, 246, 0.4),rgba(139, 92, 246, 0.6)),url(imgs/animated.svg)",
      }}
      className="h-screen py-16 bg-cover bg-no-repeat"
    >
      <div className="mycontainer">
        <h2
          className="text-center font-extrabold text-5xl  bg-clip-text text-transparent
           bg-gradient-to-r from-pink-400 to-indigo-600"
        >
          Spin The Wheel
        </h2>
        <p className="text-center text-sm font-medium">
          Fill this form to Get a Chance of &nbsp;
          <span className="text-indigo-700">Golden Spin</span>.
        </p>
        <div className="flex w-full mt-8 justify-between">
          {/* userform */}
          <Formik
            initialValues={{ fname: "", lname: "", email: "" }}
            onSubmit={formSubmit}
          >
            <Form className="w-full md:w-1/2">
              <div className="flex flex-col md:flex-row justify-between">
                <div className="flex flex-col w-1/2 md:mr-1">
                  <label htmlFor="fname" className="input-label">
                    Your Name:
                  </label>
                  <Field
                    type="text"
                    name="fname"
                    id="fname"
                    placeholder="John"
                    className="input"
                  />
                </div>
                <div className="flex flex-col w-1/2 md:ml-1">
                  <label htmlFor="lname" className="input-label">
                    Your Name:
                  </label>
                  <Field
                    type="text"
                    name="lname"
                    id="lname"
                    placeholder="Doe"
                    className="input"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="input-label">
                  Your Email:
                </label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  placeholder="john@example.com"
                  className="input"
                />
              </div>

              <div className="flex flex-col md:flex-row mt-2">
                <button type="reset" className="btn-secondary">
                  Clear
                </button>
                <button type="submit" className="btn-primary">
                  Spin a Wheel
                </button>
              </div>
            </Form>
          </Formik>
          {/* spinwheel */}
          <div className="w-full md:w-1/2 md:ml-4">
            <div
              ref={wheel}
              className="overflow-hidden relative "
              style={{
                height: "400px",
                width: "400px",
                transition: "5s",
                margin: "0 auto",
              }}
            >
              <div
                className="bg-indigo-200 flex items-center justify-center rounded-lg w-40 h-1/2 transform -translate-x-1/2 origin-bottom text-center left-32 absolute"
                style={{
                  left: "52%",
                  clipPath: "polygon(100% 0, 50% 100%, 0 0)",
                }}
              >
                One
              </div>
              <div
                className="bg-indigo-300 flex items-center justify-center rounded-lg w-40 h-1/2 transform -translate-x-1/2 origin-bottom text-center left-32 absolute"
                style={{
                  transform: "rotate(45deg)",
                  clipPath: "polygon(100% 0, 50% 100%, 0 0)",
                }}
              >
                Two
              </div>
              <div
                className="bg-indigo-400 flex items-center justify-center rounded-lg w-40 h-1/2 transform -translate-x-1/2 origin-bottom text-center left-32 absolute"
                style={{
                  transform: "rotate(90deg)",
                  clipPath: "polygon(100% 0, 50% 100%, 0 0)",
                }}
              >
                Three
              </div>
              <div
                className="bg-indigo-500 flex items-center justify-center rounded-lg w-40 h-1/2 transform -translate-x-1/2 origin-bottom text-center left-32 absolute"
                style={{
                  transform: "rotate(135deg)",
                  clipPath: "polygon(100% 0, 50% 100%, 0 0)",
                }}
              >
                Four
              </div>
              <div
                className="bg-indigo-900 flex items-center justify-center rounded-lg w-40 h-1/2 transform -translate-x-1/2 origin-bottom text-center left-32 absolute"
                style={{
                  transform: "rotate(180deg)",
                  clipPath: "polygon(100% 0, 50% 100%, 0 0)",
                }}
              >
                Five
              </div>
              <div
                className="bg-indigo-600 flex items-center justify-center rounded-lg w-40 h-1/2 transform -translate-x-1/2 origin-bottom text-center left-32 absolute"
                style={{
                  transform: "rotate(225deg)",
                  clipPath: "polygon(100% 0, 50% 100%, 0 0)",
                }}
              >
                Six
              </div>
              <div
                className="bg-indigo-500 flex items-center justify-center rounded-lg w-40 h-1/2 transform -translate-x-1/2 origin-bottom text-center left-32 absolute"
                style={{
                  transform: "rotate(270deg)",
                  clipPath: "polygon(100% 0, 50% 100%, 0 0)",
                }}
              >
                Seven
              </div>
              <div
                className="bg-indigo-400 flex items-center justify-center rounded-lg w-40 h-1/2 transform -translate-x-1/2 origin-bottom text-center left-32 absolute"
                style={{
                  transform: "rotate(315deg)",
                  clipPath: "polygon(100% 0, 50% 100%, 0 0)",
                }}
              >
                Eight
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spinwheel;
