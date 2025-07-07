import { Accordion, Fade } from "react-bootstrap"
import FAQsectionCSS from './FAQsection.module.css'

function FAQsection() {


    return (
        <>
            <div className="faq-container">
                <h2 className={FAQsectionCSS['faq-heading']}>Frequently Asked Quetions</h2>
                <Accordion defaultActiveKey="0" className={FAQsectionCSS['faq-accordion']}>
                    <Accordion.Item eventKey="0" className={FAQsectionCSS['faq-accordion-item']}>
                        <Accordion.Header className={FAQsectionCSS['faq-accordion-header']}>
                            What is Netflix?
                        </Accordion.Header>
                        <Accordion.Body className={FAQsectionCSS['faq-accordion-body']}>
                            <p> Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.

                                You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </>
    )
}

export default FAQsection;