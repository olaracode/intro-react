import React from "react";


// 
const About = () => {
    const dia = 24;
    const pi = 3.14;
    const companyData = {
        companyName: "4geeks",
        cohort: "latam-24"
    }
    const alumnos = ["Byron", "Juan", "Moises", "Lina", "Hector", "Maruan"];
    const title = "Estamos aprendiendo React.js";
    const instalationMethod = "Instalamos react usando Vite 'npm create vite@latest'"
    const description = "React en una libreria de javascript creada por facebook"
    const tecnologias = ["Javascript", "HTML", "CSS", "Bootstrap", "React.js", "Jest"];
    // todo lo que sea js va antes del return
    return (
        <div>
            {companyData.companyName} / <b>{companyData.cohort}</b>
            <p>Fecha: {dia}</p>
            {pi}
            <h2>
                {title}
            </h2>
            <h3>
                {instalationMethod}
            </h3>
            <p>
                {description}
            </p>

            <ul>
                {alumnos.map((alumno) => {
                    return(
                        <li key={alumno}>
                            {alumno}
                        </li>
                    )
                })}
            </ul>

            <h3>
                Tecnologias
            </h3>
            <div>
                {tecnologias.map((tecnologia) => {
                    return(
                        <div key={tecnologia}>
                            {tecnologia}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default About;