import React, {useState, useEffect } from 'react';
import Store from './Store.js';
import getBlockchain from './ethereum.js';

function App() {
    const [paymentProcessor, setPaymentProcessor] = useState(undefined);
    const [dai, setDai] = useState(undefined);

    useEffect(() => {
        const init = async () => {
            const {paymentProcessor, dai } = await getBlockchain();
            setPaymentProcessor(paymentProcessor);
            setDai(dai);
        }
        init();
    }, []);

    if(typeof window.ethereum === 'undefined') {
        return (
            <div className='container'>
                <div className='col-sm-12'>
                    <h1>Blockchain Ecommerce App</h1>
                    <p>Bạn cần cài đặt phiên bản mới nhất của Metamask</p>
                </div>
            </div>
        );
    }

    return (
        <div className='container'>
            <div className='col-sm-12'>
                <h1>Blockchain Ecommerce App</h1>
                <Store paymentProcessor={paymentProcessor} dai={dai}></Store>
            </div>
        </div>
    );
}

export default App;