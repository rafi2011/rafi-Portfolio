import React from 'react';
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="bg-dark text-center text-white appbar-footer">
            <div className="container p-4">
                <section className="mb-4">
                    <a className="btn btn-outline-light btn-floating m-1" href="mailto:rnessa2011@gmail.com" role="button"
                        ><i className="fa fa-google"></i></a>
                    <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/rafiun-nessa-10242a168/" role="button"
                        ><i className="fa fa-linkedin"></i></a>
                    <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/rafi2011" role="button"
                        ><i className="fa fa-github"></i></a>
                </section>
            </div>
            <div>
                <p>Looking forward to working together one day. Thank you.</p>
                <p>&copy; Rafiun Nessa</p>
            </div>
        </footer>
    );
}