import React from 'react';
import './myParagraph.css';

const AboutUs = () => {
    return (
        <div>
            <h2>About Us</h2>
            <div className="myParagraph">
                <p>
                    My name is Jane Doe, a passionate and dedicated software
                    engineer with a keen interest in web development and modern
                    technologies. I am constantly learning and pushing myself to
                    expand my skill set, allowing me to create innovative and
                    user-friendly applications.{' '}
                </p>

                <p>
                    Recently, I undertook a project to develop a To-Do list web
                    application, which I chose because I recognized the need for
                    a simple and intuitive tool to help people manage their
                    tasks and stay organized. This project allowed me to improve
                    my understanding of full-stack development and provide a
                    valuable resource for users.{' '}
                </p>

                <p>
                    For this project, I utilized a technology stack consisting
                    of React for the frontend, Node.js and Express for the
                    backend, and MongoDB as the database. To enable seamless
                    communication between the frontend and backend, I used Axios
                    for AJAX requests. React Router was employed to create a
                    smooth navigation experience across multiple pages, making
                    the application more accessible and user-friendly. Mongoose
                    was used for creating and managing MongoDB schemas and
                    models. The application demonstrates a simple user
                    authentication system, although it's not secure and should
                    not be used in production.{' '}
                </p>

                <p>
                    Through the development of this To-Do list application, I
                    learned the importance of carefully planning and structuring
                    a full-stack project to ensure efficient communication
                    between frontend and backend components. Additionally, I
                    gained valuable experience in utilizing modern libraries and
                    tools, such as React Router and Axios, to create a seamless
                    and engaging user experience. This project has not only
                    enriched my web development knowledge but also reinforced my
                    passion for creating meaningful and practical applications
                    that improve people's daily lives.
                </p>
            </div>
        </div>
    );
};

export default AboutUs;
