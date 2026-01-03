import React, { useState } from 'react';
import { Editor } from 'primereact/editor';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { PanelMenu } from 'primereact/panelmenu';

export default function App() {
    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('<div>Hello World!</div><div>PrimeReact <b>Editor</b> Rocks</div><div><br /></div>');
    const [visibleLeft, setVisibleLeft] = useState(true);

    const renderHeader = () => {
        return (
            <span className="ql-formats">
                <button className="ql-bold" aria-label="Bold"></button>
                <button className="ql-italic" aria-label="Italic"></button>
                <button className="ql-underline" aria-label="Underline"></button>
            </span>
        );
    };

    const items = [
        {
            label: 'Application',
            icon: 'pi pi-fw pi-home',
            items: [
                {
                    label: 'Home',
                    icon: 'pi pi-fw pi-home'
                },
                {
                    label: 'Inbox',
                    icon: 'pi pi-fw pi-inbox',
                    badge: 3
                },
                {
                    label: 'Calendar',
                    icon: 'pi pi-fw pi-calendar'
                },
                {
                    label: 'Search',
                    icon: 'pi pi-fw pi-search'
                },
                {
                    label: 'Documents',
                    icon: 'pi pi-fw pi-file'
                }
            ]
        },
        {
            label: 'Management',
            icon: 'pi pi-fw pi-cog',
            items: [
                {
                    label: 'Users',
                    icon: 'pi pi-fw pi-users'
                },
                {
                    label: 'Analytics',
                    icon: 'pi pi-fw pi-chart-bar'
                },
                {
                    label: 'Settings',
                    icon: 'pi pi-fw pi-cog'
                }
            ]
        }
    ];

    const header = renderHeader();

    return (
        <div style={{ display: 'flex', minHeight: '100vh' }}>
            <Sidebar 
                visible={visibleLeft} 
                onHide={() => setVisibleLeft(false)}
                showCloseIcon={false}
                modal={false}
                dismissable={false}
                style={{ width: '280px' }}
            >
                <div style={{ padding: '1rem 0' }}>
                    <h2 style={{ padding: '0 1rem', marginBottom: '1rem' }}>
                        <i className="pi pi-file" style={{ marginRight: '0.5rem' }}></i>
                        PrimeReact
                    </h2>
                    <PanelMenu model={items} style={{ width: '100%' }} />
                </div>
            </Sidebar>

            <div style={{ flex: 1, padding: '2rem', marginLeft: visibleLeft ? '280px' : '0', transition: 'margin-left 0.3s' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <Button 
                            icon="pi pi-bars" 
                            onClick={() => setVisibleLeft(!visibleLeft)}
                            text
                            rounded
                        />
                        <h1 style={{ margin: 0 }}>PrimeReact Editor Demo</h1>
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                        <h2>Basic Editor</h2>
                        <p style={{ color: '#6c757d', marginBottom: '1rem' }}>Default editor with all features</p>
                        <Editor 
                            value={text1} 
                            onTextChange={(e) => setText1(e.htmlValue)} 
                            style={{ height: '320px' }} 
                        />
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                        <h2>Custom Toolbar</h2>
                        <p style={{ color: '#6c757d', marginBottom: '1rem' }}>Editor with custom toolbar configuration</p>
                        <Editor 
                            value={text2} 
                            onTextChange={(e) => setText2(e.htmlValue)} 
                            headerTemplate={header} 
                            style={{ height: '320px' }} 
                        />
                    </div>

                    <div>
                        <h3>Output (HTML)</h3>
                        <div style={{ background: '#f5f5f5', padding: '1rem', borderRadius: '4px', border: '1px solid #dee2e6' }}>
                            <pre style={{ margin: 0 }}>{text1 || text2}</pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
