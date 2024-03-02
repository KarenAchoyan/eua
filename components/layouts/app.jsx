import React, {useState} from 'react';
import styles from "../../styles/layout.module.css"
import Drb from "./drb/drb";

const App = ({children}) => {
    const [menus, setMenus] = useState([
        {id: 1, name: "Home", subs: []},
        {
            id: 1, name: "Alumni", subs: [
                {
                    id: 1, name: "Ռեկտոր", subs: [
                        {id: 1, name: "Հայտարարություններ"},
                        {id: 2, name: "Հայտարարություններ"},
                        {id: 3, name: "Հայտարարություններ"},
                        {id: 4, name: "Հայտարարություններ"},
                    ]
                },
                {
                    id: 2, name: "Ռեկտոր", subs: []
                },
            ]
        },
        {id: 1, name: "Applicant", subs: []},
        {id: 1, name: "Education", subs: []},
        {id: 1, name: "Science", subs: []},
        {id: 1, name: "Alumni", subs: []},

        {id: 1, name: "Media", subs: []},
        {
            id: 2, name: "About", subs: [
                {
                    id: 1, name: "Ռեկտոր", subs: [
                        {id: 1, name: "Հայտարարություններ"},
                        {id: 2, name: "Հայտարարություններ"},
                        {id: 3, name: "Հայտարարություններ"},
                        {id: 4, name: "Հայտարարություններ"},
                    ]
                },
                {
                    id: 2, name: "Ռեկտոր", subs: []
                },
            ]
        },
    ])
    return (
        <>
            <header>
                <div className={styles.headerTop}>

                </div>
                <div className={styles.headerBottom}>
                    <div className={styles.container}>
                        <div className={styles.logo}>
                            <img src="/logo.png" alt=""/>
                        </div>
                        <div className={styles.menu}>
                            <ul>
                                {menus.map((item,index)=>(
                                    <li key={index}>{item.name}
                                        {item?.subs?.length > 0 ? <Drb subs={item.subs}/> : null}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                {children}
            </main>
            <footer>

            </footer>
        </>
    );
};

export default App;