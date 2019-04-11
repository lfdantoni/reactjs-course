import React from 'react';
import {render} from 'react-dom';
import Message from './components/Message';


render(
    <Message text="test" />,
    document.getElementById('root')
);
