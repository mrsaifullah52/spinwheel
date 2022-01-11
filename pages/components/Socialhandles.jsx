import { useState } from "react";

const Socialhandles = () => {
  const [social, setSocial] = useState({
    website: 0,
    twitter: 0,
    instagram: 0,
    facebook: 0,
    tiktok: 0,
  });

  const items = [
    { text: "Visit our Website", sid: "1", count: social.website },
    { text: "Follow us on Twitter", sid: "2", count: social.twitter },
    { text: "Visit us on Instagram", sid: "3", count: social.instagram },
    { text: "Like Facebook Page", sid: "4", count: social.facebook },
    { text: "Share it to TikTok", sid: "5", count: social.tiktok },
  ];

  const shareBtn = (e) => {
    switch (`${e.target.id}`) {
      case "1":
        {
          setTimeout(() => {
            setSocial((prev) => {
              return { ...prev, website: prev.website + 1 };
            });
          }, 10000);
        }
        break;
      case "2":
        {
          setTimeout(() => {
            setSocial((prev) => {
              return { ...prev, twitter: prev.twitter + 1 };
            });
          }, 10000);
        }
        break;
      case "3":
        {
          setTimeout(() => {
            setSocial((prev) => {
              return { ...prev, instagram: prev.instagram + 1 };
            });
          }, 10000);
        }
        break;
      case "4":
        {
          setTimeout(() => {
            setSocial((prev) => {
              return { ...prev, facebook: prev.facebook + 1 };
            });
          }, 10000);
        }
        break;
      case "5":
        {
          setTimeout(() => {
            setSocial((prev) => {
              return { ...prev, tiktok: prev.tiktok + 1 };
            });
          }, 10000);
        }
        break;
    }
  };

  return (
    <section className="">
      <div className="mycontainer">
        <div className="py-16">
          <p className="text-center">
            הרווח יותר סיכויים לאחר השלמת המשימות הבאות
          </p>
          <ul role="list" className="p-6 divide-y divide-gray-200">
            {items.map((val, i) => {
              return (
                <Listitem
                  text={val.text}
                  sid={val.sid}
                  count={val.count}
                  key={i}
                  click={shareBtn}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

const Listitem = ({ text, sid, count, click }) => {
  return (
    <li className="flex flex-row justify-between items-center py-4 first:pt-0 last:pb-0">
      <button
        className="text-gray-700 focus:text-[#ff6600]"
        onClick={click}
        id={sid}
      >
        {text}
      </button>
      <div className="flex flex-col items-center">
        <span className="text-base font-medium">+{count}</span>
        <span className="text-xs">Entry</span>
      </div>
    </li>
  );
};

export default Socialhandles;
