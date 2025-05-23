import React from 'react';
import ReactDOM from 'react-dom/client';
// import { StickyHeader } from '@shahmeernasir/simple-react-sticky-header';
import { StickyHeader } from '../../src';

const App = () => {
    
    return (
        <div>
            <StickyHeader
                className='my-custom-header'
                
                onHeaderHeightChange={(h) => console.log('Header height:', h)}
            >
                <h1>Sticky Header Content</h1>
            </StickyHeader>

            <div style={{ height: '200vh', paddingTop: '2rem' }}>
                Scroll to test sticky behavior.
            </div>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
