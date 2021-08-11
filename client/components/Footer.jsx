import React from 'react'



const Footer = () => {

    return (
        
        <div class="center">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>

            <div id="social-test">
                <ul class="social">
                    <a href='https://www.instagram.com/tainerasmussen/'         target="_blank">       
                        <li><i 
                            class="fa fa-instagram"
                            aria-hidden="true">
                        </i></li>
                    </a> 
                    <a href='https://github.com/taine-rasmussen' target='_blank'>
                        <li><i
                            class="fa fa-github"
                            aria-hidden="true">
                        </i></li>
                    </a>  
                    <a href='https://www.linkedin.com/in/taine-rasmussen-a66a86184/' target='_blank'> 
                        <li><i
                            class="fa fa-linkedin"
                            aria-hidden="true">
                        </i></li>
                    </a>                    
                </ul>
            </div>
        </div>
    )
}

export default Footer



