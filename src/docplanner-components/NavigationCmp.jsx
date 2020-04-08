import React from 'react';
import "./nav_cmp.css";
const Array= [
    { name: 'About Us', 
      link:"#"},
    {name:'Career', 
      link:"#"}, 
    {name:'Departments',
      link:"#"}
    ];
const NavigationCmp =() => {
    return (
        <div className="nav-item">
            <div className="logo">
            <a href="/">
                <img className="logo-docplanner" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" alt="Docplanner Group"></img>
            </a>
            </div>
            <div className="nav-menu"> {Array.map(e=>(
            <div className="navigation">
                <a className={e.name==='Departments' ? "dropdown" : "navmenu"} href={e.link}>{e.name}
                    {
                        e.name==='Departments' && (<div class="dropdown-content">
                        <a href="#">Marketing & PR</a>
                        <a href="#">Customers Success & Sales</a>
                        <a href="#">IT,Product,Data</a>
                        <a href="#">Finance & Administration</a>
                        <a href="#">HR & more</a>
                    </div>)
                    }
                    
                </a>
               
            </div>
            
            
            )

            )}
            </div>
        
        </div>
    );
}
export default NavigationCmp;
