import React, {useState, useEffect, useRef} from "react";

const Dropdown =  ({label, options, selected }) => {
    const [open, setOpen] = useState(false);
    const [ style, setStyle] = useState({})
    const ref = useRef();

    useEffect(() => {
        const onBodyClick = (event) => {
            if(ref.current && ref.current.contains(event.target)){
                return;
            }
            setOpen(false)
        };

        document.body.addEventListener('click', onBodyClick);
            return () => {
                document.body.removeEventListener('click', onBodyClick)
            };
        }, []);
    
    const renderedOptions = options.map((option) => {
        console.log(options)
              if(option.value === selected.value){
                  return null;
              }
            return(
                <div 
                key={option.value} 
                className="item"
                onClick={() => setStyle({ color: option.value})} 
                >
                {option.label}
                </div>
            )
        });

    return (
            <div ref={ref} className="ui form" >
            <div className="field" style={{backgroundColor:'lightblue'}}>
                <label className="label" style={{color: 'purple'}}>{label}</label>
                <div onClick={() => setOpen(!open)} 
                className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                    <i style={style} className="dropdown icon"></i>
                    <div style={style}  className="text">{selected.label}</div>
                    <div  className={`menu ${open ? 'visible transition' : ''}`}>{renderedOptions}
                    </div>
                </div>
            </div>
        </div>
        )
    };
    export default Dropdown;

            
        

    

        












