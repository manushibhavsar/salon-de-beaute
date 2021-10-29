import React from 'react'
import styled from 'styled-components'


function Section() {
    return (
        <Wrap>
            <Image>
                <img src="./images/home.jpeg"/>
            </Image>
            <Text>
                <h3>Our Philosophy</h3>
                <p>At the Beauty Parlour, we believe in beauty with a conscience. We have created a salon that offers the highest quality hair services in a setting that is healthier for the environment, our guests and our staff. The Beauty Parlour is designed and built primarily with recycled materials: the floor is made of reclaimed wood from a local grain elevator – preserving and showcasing its natural texture – and most of the fixtures and furniture are refurbished or original vintage pieces.
                </p>
                <p>
                We carry high quality professional hair products designed to ensure our guests look their best, both in the salon and at home. The hair care products we carry have been carefully chosen based both on performance and eco-sensitivity. As a clean air salon, we offer ammonia-free colour services with little to no scent properties or chemical emanation. This healthier alternative to traditional colouring practices is also safe for expectant mothers and individuals with allergies or scent sensitivities.
                </p>
                <p>
                Our design and philosophy work hand in hand. We are committed to providing healthy hair care with a low impact on the environment. Come see what you and your hair can do for the Earth.
                </p>
                <p>Please Note: A $50 fee may be charged in cases of no shows or last minute cancellations. Please visit our <a href="#">Policies</a> page for more information.</p>
                <Button>
                See Our Team
            </Button>
                </Text>
            <Image>
                <img src="./images/bridal.jpeg" />
            </Image>
            <Cards>
                <FirstCard>
                        <img src="./images/firstcard.jpeg"/>
                        <h2>SERVICES</h2>
                        <p>We offer a full range of salon treatments and styling services provided by a team of professional stylists, all in a clean air environment.</p>
                        <Button>
                            Learn More
                        </Button>
                        
                </FirstCard>
                <SecondCard>
                        <img src="./images/secondimg.jpeg"/>
                        <h2>PRODUCTS</h2>
                        <p>From cost-effective, recyclable packaging to naturally harvested ingredients, we are proud to provide our guests with the most health-conscious choices in professional hair care products.</p>
                        <Button>
                        Learn More
                        </Button>
                        
                </SecondCard>
                <ThirdCard>
                        <img src="./images/thirdcard.jpeg"/>
                        <h2>GALLERY</h2>
                        <p>See our talented team's handiwork and hair inspiration in our unique photo gallery.</p>
                        <Button>
                        Learn More
                        </Button>
                </ThirdCard>
            </Cards>
            <Footer>
            <a>
                    <img src="./images/Salon De Beaute.png"/>
            </a>
            <Address>
                <p>2nd Floor, 10011
                    82 Ave, Montreal,
                    QC H2J 156 <br/>
                    (780) 429 4242</p>
            </Address>
            <Hours>
            Hours: <br/>
            Monday: Closed <br/>
            Tuesday: 9am-7pm <br/>
            Wednesday: 12pm-9pm <br/>
            Thursday: 10am-7pm <br/>
            Friday: 9am-6pm <br/>
            Saturday: 10am-4pm <br/>
            Sunday: Closed <br/>
            </Hours>
            <NewsLetter>
                <p>JOIN OUR NEWSLETTER</p>
                <p>Join up and get notified about new products, updates and special offers. You can unsubscribe at any time.</p>
                <input type="text" id="email" name="Email" placeholder="Email"></input>
            </NewsLetter>

            </Footer>
            
            
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    
    
`

const Image = styled.div`
    width: 100%;
    img{
        width:100%;
        height:750px;
        object-fit: cover;
        }
`

const Text = styled.div`
    margin: 100px auto;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 80%;
    p{
        margin-bottom: 20px;
        line-height: 32px;
        
        
    }
    
    
`

const Button = styled.button`
    padding: 8px 16px;
    font-size: 16px;
    color: white;
    background-color: #954C4C;
    cursor: pointer;
    border: none;
`

const Cards = styled.div`
    width:80%;
    margin: 100px auto;
    display:flex;
    justify-content:space-evenly;
    
`

const FirstCard = styled.div`
width:50%;
height: 40%;
padding-bottom: 10px;

    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    margin: 0 20px;
    
    h2{
        margin: 0 16px;
    }
    img{
        width: 100%;
        height:100%;
        object-fit: cover;
    }
    p{
        margin: 0 16px;
        line-height: 24px;
        color: #9297A3;
    }

    Button {
        margin: 0 16px;
        padding-top: 8px;
    }
`

const SecondCard = styled(FirstCard)`
    
`
const ThirdCard = styled(FirstCard)`

`

 const Footer = styled.div`
 background-color: #954C4C;
 
margin-top: 15%;
width: 100%;
height: 50%;
display: flex;
padding: 8px 16px;
justify-content: space-evenly;
align-items: center;


img {
    width: 100%;
    height: 100%;
}

`
const Address = styled.div`
    width: 15%;
    p{
        color: white;
        
    }
    
    
    
`
const Hours = styled.div`
    width: 20%;
    color: white;
   
   
`

const NewsLetter = styled.div`
    width: 20%;
    p{
        color: white;
    }
    line-height: 1.5;
    
    

`


