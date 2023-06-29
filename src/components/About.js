import React from 'react'

export default function About(props) {
    // const [myStyle,setMyStyle]=useState({
    //     color:'black',
    //     backgroundColor:'white'
    // });
    let myStyle={
        color:props.mode==='dark'?'white':'black',
        backgroundColor:props.mode==='dark'?'#6B728E':'#E9F8F9',
        // borderColor:props.mode==='dark'?"white":"black",
    }
    let myStyle2={
        color:props.mode==='dark'?'white':'black',
        backgroundColor:props.mode==='dark'?'#6B728E':'#E9F8F9',
        // borderColor:props.mode==='dark'?"white":"black",
        borderRadius:'25px',
        boxShadow:' 2px 2px 8px #000',
    }
    return (
        <div className='container px-3 py-3' style={myStyle2}>
            <h2 className='my-3'>About Us</h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{backgroundColor:props.mode==='dark'?'#18122B':'#F2F2F2',color:props.mode==='dark'?'white':'black',}}>
                            <strong>Analyze Your Text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                        <strong>Textutils</strong> gives you a way to analyze your text quickly and efficiently. Be it word count or character count.

                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{backgroundColor:props.mode==='dark'?'#18122B':'#F2F2F2',color:props.mode==='dark'?'white':'black',}}>
                            <strong>Free To Use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                        <strong>TextUtils is a free character counter tool</strong> that provides instant character count & word count statistics for a given text. Textutils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.

                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{backgroundColor:props.mode==='dark'?'#18122B':'#F2F2F2',color:props.mode==='dark'?'white':'black',}}>
                            <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                        <strong>This word counter software</strong> works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
