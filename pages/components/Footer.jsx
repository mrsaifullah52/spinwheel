const Footer = () => {
  return (
    <footer className="bg-primary">
      <div className="mycontainer">
        <div className="py-8 px-4 text-white">
          <p className="text-center flex flex-col md:flex-row">
            <span>
              <b>משרד:&nbsp;</b>
              <a
                href="tel:+03-6500031"
                className="underline hover:bg-secondary"
              >
                03-6500031
              </a>
            </span>
            &nbsp;|&nbsp;
            <span>
              <a
                href="https://www.kolot-studios.com"
                target="_blank"
                className="underline hover:bg-secondary"
                rel="noreferrer"
              >
                www.kolot-studios.com
              </a>
            </span>
            &nbsp; | &nbsp;
            <span>
              <b>דואר אלקטרוני: &nbsp;</b>
              <a
                className="underline hover:bg-secondary"
                href="mailto:kolot.studios@gmail.co"
              >
                kolot.studios@gmail.co
              </a>
            </span>
          </p>

          <p className="text-center">
            המבצע בכפוף &nbsp;
            <a
              href="https://www.kolot-studios.com"
              className="underline hover:bg-secondary"
              target="_blank"
              rel="noreferrer"
            >
              לתקנון
            </a>
            &nbsp; |&nbsp; כל הזכויות שמורות לאולפני קולות
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
