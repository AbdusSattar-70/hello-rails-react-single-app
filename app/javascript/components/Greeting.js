import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../redux/greeting/greetingSlice';

export default function Greeting() {
    const dispatch = useDispatch();

    const { message, isLoading } = useSelector((store) => store.greeting);

    useEffect(() => {
      dispatch(fetchGreeting());
    }, []);


         if (isLoading)
    return <h1>Loading.....</h1>;

  return <h1>{message}</h1>;

  }

