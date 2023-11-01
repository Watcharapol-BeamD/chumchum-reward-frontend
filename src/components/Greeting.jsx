import { useState, useEffect } from 'react';

const Greeting = () => {
  const [time, setTime] = useState(new Date().getHours());
  const [greeting, setGreeting] = useState('');

  const getGreeting = (currentTime) => {
    if (currentTime >= 5 && currentTime < 12) {
      return 'สวัสดีตอนเช้า';
    } else if (currentTime >= 12 && currentTime < 18) {
      return 'สวัสดีตอนกลางวัน';
    } else if (currentTime >= 18 && currentTime < 22) {
      return 'สวัสดีตอนเย็น';
    } else {
      return 'สวัสดีตอนกลางคืน';
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().getHours());
    }, 1000 * 60); // Update every minute to check for the new time

    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  useEffect(() => {
    setGreeting(getGreeting(time));
  }, [time]);

  return greeting;
};

export default Greeting;
