import React, { useState } from 'react';
import { Editor } from 'primereact/editor';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

export default function App() {
    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('<div>Hello World!</div><div>PrimeReact <b>Editor</b> Rocks</div><div><br /></div>');
    const [visibleLeft, setVisibleLeft] = useState(true);
    const [darkMode, setDarkMode] = useState(false);
    const [activeMenu, setActiveMenu] = useState('home');
    const [expandedGroups, setExpandedGroups] = useState({ application: true, management: true });

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark-mode');
    };

    const toggleGroup = (group) => {
        setExpandedGroups(prev => ({
            ...prev,
            [group]: !prev[group]
        }));
    };

    const MenuItem = ({ icon, label, id, badge }) => (
        <div
            className={`sidebar-menu-item ${activeMenu === id ? 'active' : ''}`}
            onClick={() => setActiveMenu(id)}
        >
            <i className={icon}></i>
            <span>{label}</span>
            {badge && <span className="badge">{badge}</span>}
        </div>
    );

    const MenuGroup = ({ icon, label, id, children }) => (
        <div className="sidebar-menu-group">
            <div 
                className="sidebar-group-header"
                onClick={() => toggleGroup(id)}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <i className={icon}></i>
                    <span>{label}</span>
                </div>
                <i className={`pi ${expandedGroups[id] ? 'pi-chevron-down' : 'pi-chevron-right'}`}></i>
            </div>
            {expandedGroups[id] && (
                <div className="sidebar-group-content">
                    {children}
                </div>
            )}
        </div>
    );

    const renderHeader = () => {
        return (
            <span className="ql-formats">
                <button className="ql-bold" aria-label="Bold"></button>
                <button className="ql-italic" aria-label="Italic"></button>
                <button className="ql-underline" aria-label="Underline"></button>
            </span>
        );
    };

    const header = renderHeader();

    return (
        <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            minHeight: '100vh', 
            background: darkMode 
                ? 'linear-gradient(135deg, #050d17 0%, #081524 50%, #0a1929 100%)' 
                : 'linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 50%, #80deea 100%)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Ocean wave effect */}
            {darkMode && (
                <>
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '100%',
                        background: 'radial-gradient(ellipse at 20% 30%, rgba(13, 71, 161, 0.3) 0%, transparent 50%)',
                        pointerEvents: 'none'
                    }} />
                    <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '100%',
                        background: 'radial-gradient(ellipse at 80% 70%, rgba(1, 87, 155, 0.3) 0%, transparent 50%)',
                        pointerEvents: 'none'
                    }} />
                </>
            )}
            <div style={{ display: 'flex', maxWidth: '1400px', width: '100%', position: 'relative', zIndex: 1 }}>
            <Sidebar 
                visible={visibleLeft} 
                onHide={() => setVisibleLeft(false)}
                showCloseIcon={false}
                modal={false}
                dismissable={false}
                style={{ 
                    width: '220px',
                    background: darkMode 
                        ? 'linear-gradient(180deg, #051e34 0%, #032338 50%, #001a2e 100%)'
                        : 'linear-gradient(180deg, #4dd0e1 0%, #26c6da 50%, #00acc1 100%)',
                    borderRight: 'none',
                    boxShadow: darkMode 
                        ? '4px 0 8px rgba(0, 0, 0, 0.2)'
                        : '4px 0 6px rgba(0, 188, 212, 0.1)',
                    backdropFilter: 'blur(10px)'
                }}
            >
                <div style={{ padding: '1rem 0', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ 
                        padding: '0 0.25rem', 
                        marginBottom: '1.25rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}>
                        <div style={{
                            width: '36px',
                            height: '36px',
                            background: 'rgba(255, 255, 255, 0.2)',
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backdropFilter: 'blur(10px)'
                        }}>
                            <i className="pi pi-file" style={{ fontSize: '1.1rem', color: '#fff' }}></i>
                        </div>
                        <div>
                            <h2 style={{ 
                                margin: 0, 
                                fontSize: '1rem',
                                fontWeight: '700',
                                color: '#fff',
                                letterSpacing: '-0.5px'
                            }}>
                                PrimeReact
                            </h2>
                            <p style={{ 
                                margin: 0, 
                                fontSize: '0.65rem',
                                color: 'rgba(255, 255, 255, 0.8)',
                                fontWeight: '500'
                            }}>
                                Editor Demo
                            </p>
                        </div>
                    </div>
                    
                    <div style={{ flex: 1, overflowY: 'auto', padding: '0 0.25rem' }}>
                        <MenuGroup icon="pi pi-fw pi-th-large" label="Application" id="application">
                            <MenuItem icon="pi pi-fw pi-home" label="Home" id="home" />
                            <MenuItem icon="pi pi-fw pi-inbox" label="Inbox" id="inbox" badge="3" />
                            <MenuItem icon="pi pi-fw pi-calendar" label="Calendar" id="calendar" />
                            <MenuItem icon="pi pi-fw pi-search" label="Search" id="search" />
                            <MenuItem icon="pi pi-fw pi-file" label="Documents" id="documents" />
                        </MenuGroup>
                        
                        <MenuGroup icon="pi pi-fw pi-cog" label="Management" id="management">
                            <MenuItem icon="pi pi-fw pi-users" label="Users" id="users" />
                            <MenuItem icon="pi pi-fw pi-chart-bar" label="Analytics" id="analytics" />
                            <MenuItem icon="pi pi-fw pi-sliders-h" label="Settings" id="settings" />
                        </MenuGroup>
                    </div>

                    <div style={{ padding: '1rem 0.25rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
                        <div className="sidebar-menu-item">
                            <i className="pi pi-fw pi-user"></i>
                            <div style={{ flex: 1 }}>
                                <div style={{ fontSize: '0.875rem', fontWeight: '600', color: '#fff' }}>John Doe</div>
                                <div style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.7)' }}>john@example.com</div>
                            </div>
                            <i className="pi pi-fw pi-ellipsis-v" style={{ fontSize: '0.875rem' }}></i>
                        </div>
                    </div>
                </div>
            </Sidebar>

            <div style={{ flex: 1, padding: '1.25rem', marginLeft: visibleLeft ? '220px' : '0', transition: 'margin-left 0.3s', transform: 'scale(0.9)', transformOrigin: 'top center', width: '100%' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <Button 
                                icon="pi pi-bars" 
                                onClick={() => setVisibleLeft(!visibleLeft)}
                                text
                                rounded
                            />
                            <h1 style={{ margin: 0, fontSize: '1.5rem' }}>PrimeReact Editor Demo</h1>
                        </div>
                        <Button 
                            icon={darkMode ? "pi pi-sun" : "pi pi-moon"} 
                            onClick={toggleDarkMode}
                            text
                            rounded
                            tooltip={darkMode ? "Light Mode" : "Dark Mode"}
                            tooltipOptions={{ position: 'bottom' }}
                        />
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <h2 style={{ fontSize: '1.25rem' }}>Basic Editor</h2>
                        <p style={{ marginBottom: '0.75rem', fontSize: '0.9rem' }}>Default editor with all features</p>
                        <Editor 
                            value={text1} 
                            onTextChange={(e) => setText1(e.htmlValue)} 
                            style={{ height: '240px' }} 
                        />
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <h2 style={{ fontSize: '1.25rem' }}>Custom Toolbar</h2>
                        <p style={{ marginBottom: '0.75rem', fontSize: '0.9rem' }}>Editor with custom toolbar configuration</p>
                        <Editor 
                            value={text2} 
                            onTextChange={(e) => setText2(e.htmlValue)} 
                            headerTemplate={header} 
                            style={{ height: '240px' }} 
                        />
                    </div>

                    <div>
                        <h3 style={{ fontSize: '1.1rem' }}>Output (HTML)</h3>
                        <div className={darkMode ? 'dark-mode-output' : ''} style={{ background: '#f5f5f5', padding: '0.75rem', borderRadius: '4px', border: '1px solid #dee2e6', fontSize: '0.85rem' }}>
                            <pre style={{ margin: 0 }}>{text1 || text2}</pre>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}
