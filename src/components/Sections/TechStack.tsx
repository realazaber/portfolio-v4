export default function TechStack() {
  return (
    <div id="techstack">
      <h2>What I know</h2>
      <div className="flex flex-col tablet:flex-row my-3 gap-3">
        <div className="w-full tablet:w-1/4">
          <h3>Languages</h3>
          <ul>
            <span>
              <i className="fab fa-html5 text-[#e44d26]"></i>
              HTML
            </span>
            <span>
              <i className="fab fa-sass text-[#cd669a]"></i>
              CSS + SASS
            </span>
            <span>
              <i className="fab fa-js text-[#f1db4f]"></i>
              JavaScript + TypeScript
            </span>
            <span>
              <i className="fa-brands fa-php text-[#878db7]"></i>
              PHP
            </span>
            <span>
              <i className="fab fa-java text-[#f8981c]"></i>
              Java + Java FX + Java Swing
            </span>
            <span>
              <i className="fa-solid fa-database text-[#d19231]"></i>
              MySQL
            </span>
          </ul>
        </div>
        <div className="w-full tablet:w-1/4">
          <h3>Frameworks</h3>
          <ul>
            <span>
              <i className="fa-brands fa-angular text-[#e32e34]"></i>
              Angular
            </span>
            <span>
              <i className="fa-brands fa-react text-[#61dcfc]"></i>
              React + Next and Gatsby
            </span>
            <span>
              <i className="fab fa-vuejs text-[#4dba88]"></i>
              Vue + Nuxt
            </span>
            <span>
              <i className="fa-brands fa-laravel text-[#e32e34]"></i>
              Laravel
            </span>
            <span>
              <i className="fab fa-bootstrap text-[#880bfb]"></i>
              Bootstrap
            </span>
            <span>
              <i className="fa-solid fa-wind text-[#08b6d5]"></i>
              Tailwind
            </span>
          </ul>
        </div>
        <div className="w-full tablet:w-1/4">
          <h3>CMSs</h3>
          <ul>
            <span>
              <i className="fa-brands fa-drupal text-[#009cde]"></i>
              Drupal
            </span>
            <span>
              <i className="fab fa-wordpress text-[#21759b]"></i>
              Wordpress
            </span>
          </ul>
        </div>
        <div className="w-full tablet:w-1/4">
          <h3>Tools</h3>
          <ul>
            <span>
              <i className="fab fa-github text-[#21262d]"></i>
              Github
            </span>
            <span>
              <i className="fa-solid fa-globe"></i>
              REST API + GraphQL
            </span>
          </ul>
        </div>
      </div>
    </div>
  );
}
