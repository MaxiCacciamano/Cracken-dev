import React, { useEffect } from "react";
import logico from "../../IMG/pensamiento-logico.png";
import equipo from "../../IMG/depositphotos_63913815-stock-illustration-social-network-group-of-6.jpg";
import dedicacion from "../../IMG/persona-de-libre-dedicacion.png";
import resultados from "../../IMG/ICONO-Diseño-Paginas-Web-Orientadas-a-Resultados-Gipuzkoa-San-Sebastián-Irun-300x300.png";
import positiva from "../../IMG/actitud-positiva.png";
import empleado from "../../IMG/empleado.png";
import "aos/dist/aos.css";
import AOS from "aos";

import "./tecnologias.scss";

export const Tecnologias = () => {
  useEffect(() => {
    AOS.init(); // Inicializa AOS
  }, []);
  return (
    <div id="skills" className="Tecnologias" /*data-aos="fade-right"*/>
      <h1>Skills</h1>
      <div  className="skills">
        <div className="js">
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>JavaScript</title>
            <path
              fill="#b9ccb4"
              d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"
            />
          </svg>
          <h5>JavaScript</h5>
        </div>
        <div className="skill">
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>HTML5</title>
            <path
              fill="#b9ccb4"
              d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"
            />
          </svg>
          <h5>Html</h5>
        </div>
        <div className="skill">
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>CSS3</title>
            <path
              fill="#b9ccb4"
              d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"
            />
          </svg>
          <h5>Css</h5>
        </div>
        <div className="skill">
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Bootstrap</title>
            <path
              fill="#b9ccb4"
              d="M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 11.39v1.218c-1.128.108-1.817.944-2.226 2.268-.407 1.319-.463 2.937-.42 4.186.045 1.3-.968 2.5-2.337 2.5H4.985c-1.37 0-2.383-1.2-2.337-2.5.043-1.249-.013-2.867-.42-4.186-.41-1.324-1.1-2.16-2.228-2.268V11.39c1.128-.108 1.819-.944 2.227-2.268.408-1.319.464-2.937.42-4.186-.045-1.3.968-2.5 2.338-2.5h14.032c1.37 0 2.382 1.2 2.337 2.5-.043 1.249.013 2.867.42 4.186.409 1.324 1.098 2.16 2.226 2.268zm-7.927 2.817c0-1.354-.953-2.333-2.368-2.488v-.057c1.04-.169 1.856-1.135 1.856-2.213 0-1.537-1.213-2.538-3.062-2.538h-4.16v10.172h4.181c2.218 0 3.553-1.086 3.553-2.876z"
            />
          </svg>
          <h5>Boostrap</h5>
        </div>
        <div className="skill">
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Sequelize</title>
            <path
              fill="#b9ccb4"
              d="M12.0264 0 1.5947 5.9922v12.0156L12.0264 24l10.3789-5.9922V5.9922L12.0264 0zm-.0274 3.4844 7.4297 4.2266v8.5781l-7.4297 4.2266-7.3476-4.1817-.0801-8.623 7.4277-4.2266zm.0489.5898c-.9765.5627-1.9519 1.1274-2.9277 1.6914v.2539l2.6074 1.5234v.4824c.1355-.0781.2616-.1511.4023-.2324l.2559.1504v-.3359c.8844-.5068 1.8073-1.0412 2.5684-1.4805.0035-.1232.0027-.2534.0039-.373-.9703-.5596-1.9403-1.1197-2.9102-1.6797zM8.335 6.1387c-.9705.553-1.9312 1.1228-2.8926 1.6914v3.4023c.965.5553 1.9287 1.1127 2.8926 1.6699l.4023-.2324v-2.916c.8561-.4945 1.7522-1.0126 2.4902-1.4395v-.4843L8.335 6.1387zm7.4433.0879-2.8926 1.6699v.3379l2.6367 1.541v3.0664c.0854.0494.1705.0991.2559.1484l2.8926-1.6699V7.918l-2.8926-1.6914zm-3.6484 2.1445c-.9636.5584-1.9281 1.1151-2.8926 1.6719v3.4238c.965.5553 1.9287 1.1127 2.8926 1.6699l2.8926-1.6719v-3.4023l-2.8926-1.6914zm-6.1973 3.7227c-.1627.0962-.3275.1889-.4902.2852v3.4023c.9643.5571 1.9284 1.1145 2.8926 1.6719l.4023-.2324v-2.918c.1625-.0939.3086-.1787.4727-.2734-.1629-.0945-.3047-.1763-.4727-.2734v-.508l-.4023.2325c-.8251-.4771-1.6902-.976-2.4024-1.3867zm12.2481.0859-2.4023 1.3887c-.088-.0509-.1672-.0972-.2559-.1484v.334l-.4922.2852.4922.2871v3.0664c.0854.0494.1705.0991.2559.1484l2.8926-1.6719v-3.4023l-.4903-.2872zm-8.4688 2.1387c-.1581.0913-.3165.1821-.4746.2734v3.4238c.9637.5575 1.9282 1.1136 2.8926 1.6699l2.8926-1.6699v-3.4023l-.4902-.2871-2.4023 1.3887c-.8307-.4804-1.7013-.9829-2.4181-1.3965z"
            />
          </svg>
          <h5>Sequelize</h5>
        </div>
        <div className="skill">
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>React</title>
            <path
              fill="#b9ccb4"
              d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"
            />
          </svg>
          <h5>React</h5>
        </div>
        <div className="skill">
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Redux</title>
            <path
              fill="#b9ccb4"
              d="M16.634 16.504c.87-.075 1.543-.84 1.5-1.754-.047-.914-.796-1.648-1.709-1.648h-.061a1.71 1.71 0 00-1.648 1.769c.03.479.226.869.494 1.153-1.048 2.038-2.621 3.536-5.005 4.795-1.603.838-3.296 1.154-4.944.93-1.378-.195-2.456-.81-3.116-1.799-.988-1.499-1.078-3.116-.255-4.734.6-1.17 1.499-2.023 2.099-2.443a9.96 9.96 0 01-.42-1.543C-.868 14.408-.416 18.752.932 20.805c1.004 1.498 3.057 2.456 5.304 2.456.6 0 1.23-.044 1.843-.194 3.897-.749 6.848-3.086 8.541-6.532zm5.348-3.746c-2.32-2.728-5.738-4.226-9.634-4.226h-.51c-.253-.554-.837-.899-1.498-.899h-.045c-.943 0-1.678.81-1.647 1.753.03.898.794 1.648 1.708 1.648h.074a1.69 1.69 0 001.499-1.049h.555c2.309 0 4.495.674 6.488 1.992 1.527 1.005 2.622 2.323 3.237 3.897.538 1.288.509 2.547-.045 3.597-.855 1.647-2.294 2.517-4.196 2.517-1.199 0-2.367-.375-2.967-.644-.36.298-.96.793-1.394 1.093 1.318.598 2.652.943 3.94.943 2.922 0 5.094-1.647 5.919-3.236.898-1.798.824-4.824-1.47-7.416zM6.49 17.042c.03.899.793 1.648 1.708 1.648h.06a1.688 1.688 0 001.648-1.768c0-.9-.779-1.647-1.693-1.647h-.06c-.06 0-.15 0-.226.029-1.243-2.098-1.768-4.347-1.572-6.772.12-1.828.72-3.417 1.797-4.735.9-1.124 2.593-1.68 3.747-1.708 3.236-.061 4.585 3.971 4.689 5.574l1.498.45C17.741 3.197 14.686.62 11.764.62 9.02.62 6.49 2.613 5.47 5.535 4.077 9.43 4.991 13.177 6.7 16.174c-.15.195-.24.539-.21.868z"
            />
          </svg>
          <h5>Redux</h5>
        </div>
        <div className="skill">
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Node.js</title>
            <path
              fill="#b9ccb4"
              d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"
            />
          </svg>
          <h5>Node js</h5>
        </div>
        <div className="skill">
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Express</title>
            <path
              fill="#b9ccb4"
              d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"
            />
          </svg>
          <h5>Express JS</h5>
        </div>
        <div className="skill">
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>MongoDB</title>
            <path
              fill="#b9ccb4"
              d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"
            />
          </svg>
          <h5>Mongo DB</h5>
        </div>
        <div className="skill">
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>TypeScript</title>
            <path
              fill="#b9ccb4"
              d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"
            />
          </svg>
          <h5>TypeScript</h5>
        </div>
        <div className="skill">
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Sass</title>
            <path
              fill="#b9ccb4"
              d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zM9.615 15.998c.175.645.156 1.248-.024 1.792l-.065.18c-.024.061-.052.12-.078.176-.14.29-.326.56-.555.81-.698.759-1.672 1.047-2.09.805-.45-.262-.226-1.335.584-2.19.871-.918 2.12-1.509 2.12-1.509v-.003l.108-.061zm9.911-10.861c-.542-2.133-4.077-2.834-7.422-1.645-1.989.707-4.144 1.818-5.693 3.267C4.568 8.48 4.275 9.98 4.396 10.607c.427 2.211 3.457 3.657 4.703 4.73v.006c-.367.18-3.056 1.529-3.686 2.925-.675 1.47.105 2.521.615 2.655 1.575.436 3.195-.36 4.065-1.649.84-1.261.766-2.881.404-3.676.496-.135 1.08-.195 1.83-.104 2.101.24 2.521 1.56 2.43 2.1-.09.539-.523.854-.674.944-.15.091-.195.12-.181.181.015.09.091.09.21.075.165-.03 1.096-.45 1.141-1.471.045-1.29-1.186-2.729-3.375-2.7-.9.016-1.471.091-1.875.256-.03-.045-.061-.075-.105-.105-1.35-1.455-3.855-2.475-3.75-4.41.03-.705.285-2.564 4.8-4.814 3.705-1.846 6.661-1.335 7.171-.21.733 1.604-1.576 4.59-5.431 5.024-1.47.165-2.235-.404-2.431-.615-.209-.225-.239-.24-.314-.194-.12.06-.045.255 0 .375.12.3.585.825 1.396 1.095.704.225 2.43.359 4.5-.45 2.324-.899 4.139-3.405 3.614-5.505l.073.067z"
            />
          </svg>
          <h5>sass</h5>
        </div>
        <div className="skill">
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>PostgreSQL</title>
            <path
              fill="#b9ccb4"
              d="M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698zM2.371 11.8765c-.7435-2.4358-1.1779-4.8851-1.2123-5.5719-.1086-2.1714.4171-3.6829 1.5623-4.4927 1.8367-1.2986 4.8398-.5408 6.108-.13-.0032.0032-.0066.0061-.0098.0094-2.0238 2.044-1.9758 5.536-1.9708 5.7495-.0002.0823.0066.1989.0162.3593.0348.5873.0996 1.6804-.0735 2.9184-.1609 1.1504.1937 2.2764.9728 3.0892.0806.0841.1648.1631.2518.2374-.3468.3714-1.1004 1.1926-1.9025 2.1576-.5677.6825-.9597.5517-1.0886.5087-.3919-.1307-.813-.5871-1.2381-1.3223-.4796-.839-.9635-2.0317-1.4155-3.5126zm6.0072 5.0871c-.1711-.0428-.3271-.1132-.4322-.1772.0889-.0394.2374-.0902.4833-.1409 1.2833-.2641 1.4815-.4506 1.9143-1.0002.0992-.126.2116-.2687.3673-.4426a.3549.3549 0 0 0 .0737-.1298c.1708-.1513.2724-.1099.4369-.0417.156.0646.3078.26.3695.4752.0291.1016.0619.2945-.0452.4444-.9043 1.2658-2.2216 1.2494-3.1676 1.0128zm2.094-3.988-.0525.141c-.133.3566-.2567.6881-.3334 1.003-.6674-.0021-1.3168-.2872-1.8105-.8024-.6279-.6551-.9131-1.5664-.7825-2.5004.1828-1.3079.1153-2.4468.079-3.0586-.005-.0857-.0095-.1607-.0122-.2199.2957-.2621 1.6659-.9962 2.6429-.7724.4459.1022.7176.4057.8305.928.5846 2.7038.0774 3.8307-.3302 4.7363-.084.1866-.1633.3629-.2311.5454zm7.3637 4.5725c-.0169.1768-.0358.376-.0618.5959l-.146.4383a.3547.3547 0 0 0-.0182.1077c-.0059.4747-.054.6489-.115.8693-.0634.2292-.1353.4891-.1794 1.0575-.11 1.4143-.8782 2.2267-2.4172 2.5565-1.5155.3251-1.7843-.4968-2.0212-1.2217a6.5824 6.5824 0 0 0-.0769-.2266c-.2154-.5858-.1911-1.4119-.1574-2.5551.0165-.5612-.0249-1.9013-.3302-2.6462.0044-.2932.0106-.5909.019-.8918a.3529.3529 0 0 0-.0153-.1126 1.4927 1.4927 0 0 0-.0439-.208c-.1226-.4283-.4213-.7866-.7797-.9351-.1424-.059-.4038-.1672-.7178-.0869.067-.276.1831-.5875.309-.9249l.0529-.142c.0595-.16.134-.3257.213-.5012.4265-.9476 1.0106-2.2453.3766-5.1772-.2374-1.0981-1.0304-1.6343-2.2324-1.5098-.7207.0746-1.3799.3654-1.7088.5321a5.6716 5.6716 0 0 0-.1958.1041c.0918-1.1064.4386-3.1741 1.7357-4.4823a4.0306 4.0306 0 0 1 .3033-.276.3532.3532 0 0 0 .1447-.0644c.7524-.5706 1.6945-.8506 2.802-.8325.4091.0067.8017.0339 1.1742.081 1.939.3544 3.2439 1.4468 4.0359 2.3827.8143.9623 1.2552 1.9315 1.4312 2.4543-1.3232-.1346-2.2234.1268-2.6797.779-.9926 1.4189.543 4.1729 1.2811 5.4964.1353.2426.2522.4522.2889.5413.2403.5825.5515.9713.7787 1.2552.0696.087.1372.1714.1885.245-.4008.1155-1.1208.3825-1.0552 1.717-.0123.1563-.0423.4469-.0834.8148-.0461.2077-.0702.4603-.0994.7662zm.8905-1.6211c-.0405-.8316.2691-.9185.5967-1.0105a2.8566 2.8566 0 0 0 .135-.0406 1.202 1.202 0 0 0 .1342.103c.5703.3765 1.5823.4213 3.0068.1344-.2016.1769-.5189.3994-.9533.6011-.4098.1903-1.0957.333-1.7473.3636-.7197.0336-1.0859-.0807-1.1721-.151zm.5695-9.2712c-.0059.3508-.0542.6692-.1054 1.0017-.055.3576-.112.7274-.1264 1.1762-.0142.4368.0404.8909.0932 1.3301.1066.887.216 1.8003-.2075 2.7014a3.5272 3.5272 0 0 1-.1876-.3856c-.0527-.1276-.1669-.3326-.3251-.6162-.6156-1.1041-2.0574-3.6896-1.3193-4.7446.3795-.5427 1.3408-.5661 2.1781-.463zm.2284 7.0137a12.3762 12.3762 0 0 0-.0853-.1074l-.0355-.0444c.7262-1.1995.5842-2.3862.4578-3.4385-.0519-.4318-.1009-.8396-.0885-1.2226.0129-.4061.0666-.7543.1185-1.0911.0639-.415.1288-.8443.1109-1.3505.0134-.0531.0188-.1158.0118-.1902-.0457-.4855-.5999-1.938-1.7294-3.253-.6076-.7073-1.4896-1.4972-2.6889-2.0395.5251-.1066 1.2328-.2035 2.0244-.1859 2.0515.0456 3.6746.8135 4.8242 2.2824a.908.908 0 0 1 .0667.1002c.7231 1.3556-.2762 6.2751-2.9867 10.5405zm-8.8166-6.1162c-.025.1794-.3089.4225-.6211.4225a.5821.5821 0 0 1-.0809-.0056c-.1873-.026-.3765-.144-.5059-.3156-.0458-.0605-.1203-.178-.1055-.2844.0055-.0401.0261-.0985.0925-.1488.1182-.0894.3518-.1226.6096-.0867.3163.0441.6426.1938.6113.4186zm7.9305-.4114c.0111.0792-.049.201-.1531.3102-.0683.0717-.212.1961-.4079.2232a.5456.5456 0 0 1-.075.0052c-.2935 0-.5414-.2344-.5607-.3717-.024-.1765.2641-.3106.5611-.352.297-.0414.6111.0088.6356.1851z"
            />
          </svg>
          <h5>Postgre Sql</h5>
        </div>
        <div className="skill">
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Git</title>
            <path
              fill="#b9ccb4"
              d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"
            />
          </svg>
          <h5>git</h5>
        </div>
        <div className="skill">
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>GitHub</title>
            <path
              fill="#b9ccb4"
              d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
            />
          </svg>
          <h5 style={{ top: "2px" }}>GitHub</h5>
        </div>
        <div className="skill">
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>WordPress</title>
            <path
              fill="#b9ccb4"
              d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.609-3.582.609M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0"
            />
          </svg>
          <h5>WordPress</h5>
        </div>
        <div className="skill">
          <svg
            style={{ top: "26px" }}
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Scrutinizer CI</title>
            <path
              fill="#b9ccb4"
              d="M14.862 0L6.879.06a6.139 6.127 0 00-3.744 2.508 6.36 6.36 0 00-1.357 2.64l-.12.553-.12.857c-.06.8-.06 1.351.12 1.471h5.276c.06 0-.186-.246-.186-.672 0-.738.252-.924.552-1.23.552-.426 2.945-.12 4.728-.246 2.448 0 4.602-.06 4.848-.12 2.7-.427 5.03-2.388 5.522-4.536.12-.547.12-1.105.06-1.165C22.398 0 21.418 0 14.86 0zM9.194 9.007c-3.758-.015-7.47 0-7.53.06-.126.126-.06.798.06 1.35a5.64 5.64 0 001.843 2.761 7.549 7.549 0 003.312 1.59c.366.126 1.044.126 4.597.126 4.236 0 4.915.06 5.22.24a1.842 1.836 0 01.372.372c.18.24.18.307.18.98 0 .671-.065.731-.185 1.043a1.47 1.47 0 01-.426.366c-.186.12-.307.12-4.357.18-4.67 0-5.155 0-6.32.431a6.445 6.433 0 00-2.46 1.35c-1.163 1.04-1.841 2.203-1.961 3.428l.06.611a283.022 282.613 0 0015.404 0l.492-.12a4.543 4.537 0 00.737-.245l.367-.18a7.735 7.723 0 003.499-4.297 8.407 8.395 0 00-.373-6.06 8.527 8.521 0 00-2.328-2.88 6.937 6.925 0 00-2.394-.985c-.246-.06-4.051-.106-7.81-.12z"
            />
          </svg>
          <h5 style={{ top: "20px" }} className="scrum-t">
            SCRUM
          </h5>
        </div>
        <div className="skill">
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Microsoft SQL Server</title>
            <path
              fill="#b9ccb4"
              d="M4.724 2.505s-.08.127-.004.315c.046.116.186.256.34.404 0 0 1.615 1.576 1.813 1.804.895 1.033 1.284 2.05 1.32 3.453.022.9-.151 1.692-.573 2.613-.756 1.649-2.35 3.468-4.81 5.49l.36-.12c.233-.173.548-.359 1.292-.766 1.713-.936 3.636-1.798 5.999-2.686 3.399-1.277 8.99-2.776 12.172-3.263l.331-.051-.05-.08c-.292-.452-.49-.731-.73-1.027-.697-.863-1.542-1.567-2.577-2.146-1.422-.797-3.267-1.416-5.6-1.88a67.93 67.93 0 00-2.191-.375 209.29 209.29 0 01-3.924-.64c-.425-.075-1.06-.181-1.481-.272a9.404 9.404 0 01-.961-.258c-.268-.105-.645-.207-.726-.515zm.936.909c.003-.002.063.017.137.042.136.046.316.1.526.159.146.04.307.084.479.127.218.056.399.104.401.107.024.027.391 1.198.516 1.647.048.172.084.315.081.318a.789.789 0 01-.09-.14c-.424-.746-1.097-1.505-1.874-2.116a3.104 3.104 0 01-.176-.144zm1.79.494c.018-.001.099.012.195.034.619.136 1.725.35 2.435.47.119.02.216.04.216.047a.348.348 0 01-.098.062c-.119.06-.602.349-.763.457-.403.27-.766.559-1.03.821a5.4 5.4 0 01-.197.192c-.003 0-.022-.062-.041-.137a12.09 12.09 0 00-.65-1.779 1.801 1.801 0 01-.071-.165c0-.001 0-.002.004-.002zm3.147.598c.02.007.06.13.129.404a6.05 6.05 0 01.153 1.977l-.012.038-.187-.06c-.388-.124-1.02-.31-1.562-.46a6.625 6.625 0 01-.56-.17c0-.022.449-.471.642-.642.369-.326 1.362-1.098 1.397-1.087zm.25.036c.011-.01 1.504.248 2.182.378.506.097 1.237.25 1.281.269.022.008-.054.05-.297.16-.96.432-1.672.82-2.38 1.293-.186.124-.341.226-.344.226-.004 0-.006-.104-.006-.23 0-.69-.139-1.387-.391-1.976a.688.688 0 01-.045-.12zm3.86.764c.011.011-.038.306-.08.48-.132.54-.482 1.344-.914 2.099a2.26 2.26 0 01-.152.246 1.499 1.499 0 01-.219-.115c-.422-.247-.9-.48-1.425-.697a4.588 4.588 0 01-.278-.12c-.024-.022 1.143-.795 1.762-1.166.495-.297 1.292-.741 1.306-.727zm.276.043c.033 0 .695.18 1.037.283.853.255 1.837.614 2.475.904l.265.12-.187.043c-1.561.36-2.9.773-4.188 1.296-.107.044-.2.08-.207.08a.911.911 0 01.075-.185c.388-.823.638-1.687.703-2.42.006-.067.018-.121.027-.121zm-6.58 1.512c.01-.01.514.108.789.185.413.116 1.292.41 1.292.433 0 .004-.097.089-.215.188-.475.397-.934.813-1.483 1.343a5.27 5.27 0 01-.308.285c-.007 0-.01-.023-.006-.05.083-.611.065-1.395-.05-2.193a1.29 1.29 0 01-.02-.19zm10.61.01c.007.008-.234.385-.384.6-.22.314-.537.726-1.261 1.637l-.954 1.202a9.418 9.418 0 01-.269.333c-.003 0-.05-.066-.103-.146a7.584 7.584 0 00-1.47-1.625 9.59 9.59 0 00-.27-.218.427.427 0 01-.074-.063c0-.01.617-.274 1.088-.466a37.02 37.02 0 012.778-.99c.442-.135.912-.27.919-.264zm.278.073a.93.93 0 01.207.1 12.274 12.274 0 012.428 1.824c.194.19.667.683.66.687l-.363.029c-1.53.115-3.486.44-5.37.893-.128.03-.238.056-.246.056-.007 0 .133-.14.311-.312 1.107-1.063 1.611-1.734 2.205-2.934.088-.178.163-.333.166-.342h.002zm-8.088.83c.051.01.523.23.879.408.325.163.818.426.843.449.003.003-.17.093-.386.201-.683.342-1.268.664-1.878 1.037-.175.107-.32.194-.325.194-.015 0-.01-.013.088-.191a7.702 7.702 0 00.738-2.002c.014-.062.03-.1.041-.097zm-.475.084c.01.01-.112.46-.19.7a9.092 9.092 0 01-.835 1.808l-.09.147-.203-.197a2.671 2.671 0 00-.676-.5 1.009 1.009 0 01-.176-.102c0-.03.62-.593 1.098-.998.343-.29 1.064-.867 1.072-.858zm2.888 1.188l.177.115c.407.264.888.619 1.255.924.206.172.605.53.687.616l.044.047-.294.082a53.8 53.8 0 00-4.45 1.424c-.167.061-.31.112-.32.112-.021 0-.042.019.333-.326.96-.883 1.807-1.856 2.44-2.802zm-.759.19c.009.009-.492.71-.789 1.106-.356.473-.99 1.265-1.426 1.78a8.769 8.769 0 01-.346.397c-.01.003-.015-.05-.016-.133 0-.44-.112-.91-.308-1.308-.083-.168-.097-.208-.08-.224.068-.062 1.127-.666 1.794-1.023.459-.246 1.163-.604 1.171-.595zm-4.59 1.125a3.988 3.988 0 01.812.518c.008.005-.087.083-.21.172-.345.249-.87.644-1.173.886-.32.255-.331.263-.295.207.24-.367.36-.574.486-.84.113-.236.224-.516.304-.76a.675.675 0 01.077-.183zm1.223.96c.017-.003.04.028.139.175.207.31.366.722.407 1.058l.008.073-.497.192c-.89.346-1.711.687-2.266.94-.155.072-.428.202-.607.292-.179.09-.325.16-.325.156 0-.004.112-.089.25-.188 1.087-.79 2.025-1.654 2.732-2.519.075-.092.144-.172.153-.178a.016.016 0 01.006-.002zm-.564.14c.015.014-.401.484-.681.77-.7.715-1.396 1.275-2.256 1.821-.108.069-.206.13-.22.138-.023.014.008-.022.386-.434.238-.259.42-.474.628-.743.136-.177.162-.202.362-.346.537-.388 1.767-1.221 1.781-1.207zM9.925 0c-.08-.01-1.371.455-2.2.791-1.123.457-1.996.894-2.534 1.272-.2.14-.452.393-.488.49a.356.356 0 00-.021.123l.488.46 1.158.37L9.087 4l3.153.542.032-.27-.028-.005-.415-.066-.085-.148a27.702 27.702 0 01-1.177-2.325 12.264 12.264 0 01-.53-1.465C9.969.02 9.962.005 9.925 0zm-.061.186h.005c.003.003.017.105.032.225.062.508.176 1 .354 1.53.134.4.136.377-.024.332-.37-.103-2.032-.388-3.234-.555a8.796 8.796 0 01-.357-.053c-.015-.015.867-.477 1.258-.66.501-.232 1.867-.8 1.966-.819zM6.362 1.814l.141.048c.772.262 2.706.632 3.775.72.12.01.222.021.225.024.003.003-.1.058-.228.122-.515.258-1.083.573-1.476.819-.115.072-.22.13-.235.129a4.868 4.868 0 01-.17-.027l-.144-.023-.365-.355c-.641-.62-1.141-1.1-1.335-1.28zm-.143.114l.511.638c.282.35.564.699.626.774.063.075.111.138.108.14-.014.011-.74-.13-1.125-.219a8.532 8.532 0 01-.803-.212l-.2-.064.001-.049c.003-.245.312-.607.836-.976zm4.352.869c.015.001.032.032.077.131.124.272.51 1.008.603 1.15.03.047.08.05-.433-.033-1.23-.198-1.629-.265-1.629-.273a.36.36 0 01.083-.054 7.13 7.13 0 001.107-.767l.175-.147c.006-.005.012-.008.017-.007zm4.309 8.408l-4.808 1.568-4.18 1.846-1.17.31c-.298.282-.613.568-.948.86-.37.321-.716.612-.98.822a7.46 7.46 0 00-.953.945c-.332.414-.592.854-.704 1.193-.2.61-.103 1.228.285 1.798.495.728 1.48 1.468 2.625 1.972.585.256 1.57.588 2.31.774 1.233.312 3.614.65 4.926.7.266.01.62.01.637-.002.028-.019.233-.405.47-.89.806-1.646 1.389-3.19 1.703-4.508.19-.799.338-1.863.434-3.125.027-.354.037-1.533.016-1.934a13.564 13.564 0 00-.183-1.706.435.435 0 01-.012-.15c.014-.01.059-.025.65-.197zm-1.1.645c.045 0 .16 1.114.191 1.82.006.151.005.247-.004.247-.028 0-.615-.345-1.032-.606a28.716 28.716 0 01-1.162-.772c-.035-.028-.031-.029.266-.131.505-.174 1.704-.558 1.742-.558zm-2.448.803c.03 0 .115.047.315.172.75.47 1.766 1.035 2.2 1.225.136.06.151.036-.16.247-.662.45-1.486.892-2.497 1.342a7.59 7.59 0 01-.331.142.989.989 0 01.043-.2c.245-.905.383-1.82.387-2.554.002-.362.002-.364.037-.373h.006zm-.504.193c.021.022.006.834-.02 1.056a9.206 9.206 0 01-.418 1.837c-.014.017-.511-.468-.676-.66a4.918 4.918 0 01-.669-.973c-.082-.162-.214-.484-.202-.493.056-.04 1.971-.78 1.985-.767zm-2.375.936c.004 0 .008.001.01.004a.881.881 0 01.056.131c.116.315.376.782.602 1.08a6.247 6.247 0 001.017 1.06c.023.02.03.016-.562.24a48.53 48.53 0 01-2.294.8c-.327.106-.604.195-.615.2-.033.011-.023-.009.073-.158.427-.666 1.073-1.97 1.435-2.892.062-.16.122-.32.133-.356.015-.052.031-.07.08-.092a.149.149 0 01.065-.017zm-.728.3c.01.009-.174.398-.356.751-.351.686-.739 1.361-1.253 2.185l-.182.288c-.018.027-.026.018-.082-.094a3.307 3.307 0 01-.28-.842 3.39 3.39 0 01.02-1.083c.047-.227.045-.222.152-.276.462-.237 1.966-.942 1.981-.929zm6.268.255v.154a20.106 20.106 0 01-.255 2.992 9.362 9.362 0 01-1.898-.782c-.354-.194-.865-.507-.85-.522.003-.004.154-.083.334-.177.714-.37 1.395-.77 1.988-1.166.222-.148.555-.389.629-.454zM4.981 15.41c.015 0 .011.028-.012.161a4.137 4.137 0 00-.041.39c-.03.532.057.924.32 1.46.074.15.132.274.129.276-.027.023-2.43.726-3.186.933l-.435.12c-.027.008-.029.002-.02-.06.083-.533.49-1.232 1.058-1.82.378-.39.68-.622 1.195-.915a30.782 30.782 0 01.992-.545zm5.669 1.015c.002-.002.091.045.197.107.777.449 1.86.87 2.783 1.081l.084.02-.115.063c-.482.268-2.071.929-3.694 1.537a68.82 68.82 0 00-.513.194.314.314 0 01-.082.027c0-.004.067-.132.149-.286.456-.852.91-1.887 1.144-2.605.023-.073.044-.135.047-.138zm-.578.19a1.39 1.39 0 01-.063.169 23.534 23.534 0 01-1.261 2.54 9.009 9.009 0 01-.252.433c-.005 0-.114-.066-.244-.145-.77-.472-1.452-1.052-1.9-1.617l-.064-.08.332-.091a23.616 23.616 0 003.19-1.103c.142-.06.26-.109.262-.106zm3.59 1.253c.001 0 .002.001.002.003 0 .08-.183.828-.336 1.37-.128.453-.236.808-.435 1.437a8.533 8.533 0 01-.168.504 15.004 15.004 0 01-3-.841 7.964 7.964 0 01-.639-.283c-.006-.007.213-.11.486-.23 1.655-.721 3.369-1.543 3.955-1.896a.432.432 0 01.135-.064zm-8.287.283c.009.009-.454.671-1.1 1.576l-.587.823c-.097.139-.245.358-.329.488l-.153.236-.162-.137c-.191-.16-.525-.501-.677-.69-.312-.389-.523-.798-.607-1.174-.038-.174-.04-.262-.003-.273a176.26 176.26 0 011.934-.455l1.3-.305c.209-.05.382-.09.384-.089zm.465.178l.117.131a6.763 6.763 0 001.706 1.394c.115.066.202.124.195.128a281.967 281.967 0 01-4.33 1.53.858.858 0 01-.072-.048l-.067-.048.105-.152c.34-.493.768-1.035 1.705-2.162zm2.9 2.073c.003-.003.165.054.362.128.473.177.844.292 1.347.418.617.155 1.51.31 2.038.354.08.006.122.016.11.024-.025.016-.56.194-.953.318a258.526 258.526 0 01-4.636 1.363c-.035.007-.157-.025-.157-.04 0-.009.087-.119.193-.246a22.027 22.027 0 001.476-1.984 56.9 56.9 0 01.22-.335zm-.642.018c.005.005-.253.418-.706 1.132-.192.301-.409.645-.483.762-.075.118-.184.298-.242.4l-.107.185-.054-.014c-.13-.035-1.049-.36-1.291-.456-.301-.12-.615-.264-.846-.389-.289-.156-.655-.388-.627-.397l1.105-.302c1.592-.434 2.473-.683 3.05-.864.109-.033.199-.059.2-.057zm4.523 1.061h.006c.015.038-.575 1.67-.79 2.188-.049.116-.066.145-.092.143a55.54 55.54 0 01-1.433-.2c-.906-.138-2.423-.403-2.806-.49l-.089-.02.543-.122c1.164-.262 1.723-.403 2.29-.577a16.544 16.544 0 002.138-.824c.113-.052.21-.093.233-.098Z"
            />
          </svg>
          <h5>sql server</h5>
        </div>
        <div className="skill">
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>C</title>
            <path
              fill="#b9ccb4"
              d="M16.5921 9.1962s-.354-3.298-3.627-3.39c-3.2741-.09-4.9552 2.474-4.9552 6.14 0 3.6651 1.858 6.5972 5.0451 6.5972 3.184 0 3.5381-3.665 3.5381-3.665l6.1041.365s.36 3.31-2.196 5.836c-2.552 2.5241-5.6901 2.9371-7.8762 2.9201-2.19-.017-5.2261.034-8.1602-2.97-2.938-3.0101-3.436-5.9302-3.436-8.8002 0-2.8701.556-6.6702 4.047-9.5502C7.444.72 9.849 0 12.254 0c10.0422 0 10.7172 9.2602 10.7172 9.2602z"
            />
          </svg>
          <h5>C#</h5>
        </div>
        <div className="skill">
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>.NET</title>
            <path
              fill="#b9ccb4"
              d="M24 8.77h-2.468v7.565h-1.425V8.77h-2.462V7.53H24zm-6.852 7.565h-4.821V7.53h4.63v1.24h-3.205v2.494h2.953v1.234h-2.953v2.604h3.396zm-6.708 0H8.882L4.78 9.863a2.896 2.896 0 0 1-.258-.51h-.036c.032.189.048.592.048 1.21v5.772H3.157V7.53h1.659l3.965 6.32c.167.261.275.442.323.54h.024c-.04-.233-.06-.629-.06-1.185V7.529h1.372zm-8.703-.693a.868.829 0 0 1-.869.829.868.829 0 0 1-.868-.83.868.829 0 0 1 .868-.828.868.829 0 0 1 .869.829Z"
            />
          </svg>
          <h5 style={{ bottom: "7px" }}>.Net</h5>
        </div>
      </div>
      <div className="Habilidades-blandas" /*data-aos="fade-left"*/>
        <h1>Habilidades blandas</h1>
          <div className="blandas">
            <div className="subBland">
              <img src={logico} />
              <h5>
                Pensamiento
                <br /> lógico
              </h5>
            </div>
            <div className="subBland equipo">
              <img src={equipo} />
              <h5>
                Trabajo en
                <br /> equipo
              </h5>
            </div>
            <div className="subBland">
              <img src={dedicacion} />
              <h5>Dedicación</h5>
            </div>
            <div className="subBland">
              <img src={resultados} />
              <h5>Resultados</h5>
            </div>
            <div className="subBland">
              <img src={empleado} />
              <h5>Proactivo</h5>
            </div>
          </div>
        </div>
    </div>
  );
};
