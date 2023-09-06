import './Footer.css';

function Footer () {
    return (
        <div id='footer-container'>
            <div id='footer-content-container'>
                <h5>Team Members</h5>
                <div id='team-members'>
                    <div className='team-member-container'>
                        <h5>Shali Peng</h5>
                        <a>Portfolio</a>
                        <a>Github</a>
                        <a>LinkedIn</a>
                    </div>
                    <div className='team-member-container'>
                        <h5>Elliot Kuok</h5>
                        <a href="https://elliotkuok.com" target="_blank">Portfolio</a>
                        <a href="https://github.com/elliotkuok" target="_blank">Github</a>
                        <a href="https://www.linkedin.com/in/elliotkuok/" target="_blank">LinkedIn</a>
                    </div>
                    <div className='team-member-container'>
                        <h5>Luis Laffitte</h5>
                        <a>Portfolio</a>
                        <a>Github</a>
                        <a>LinkedIn</a>
                    </div>
                    <div className='team-member-container'>
                        <h5>Manuel Pérez Asensio</h5>
                        <a>Portfolio</a>
                        <a>Github</a>
                        <a>LinkedIn</a>
                    </div>
                </div>    
            </div>
        </div>
    )
}

export default Footer;