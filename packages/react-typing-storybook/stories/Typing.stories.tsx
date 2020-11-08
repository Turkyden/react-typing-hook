import React, { useRef, useState } from 'react';
import { Typing } from './Typing';
import useTyping from 'react-typing-hook';

export default {
  title: 'Example/Typing',
  component: Typing,
  argTypes: {
    
  },
};

const Template = (args) => <Typing {...args} />;

export const Default = Template.bind({});
// Default.args = {
//   steps: ['Hello', 1000, 'Hello world!', 500],
//   loop: Infinity,
//   speed: 60
// };

export const HelloWord = () => {
  const ref = useRef(null);
  useTyping(ref, {
    steps: ['Hello', 1000, 'Hello world!', 500],
    loop: Infinity
  })
  return (
    <p ref={ref}></p>
  )
};

export const Callback = () => {
  const [ color, setColor ] = useState('#c7161e');
  const setRandomColor = () => {
    setColor('#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).substr(-6))
  }
  const ref = useRef(null);
  useTyping(ref, {
    steps: ['This', 500, 'This is a random', 800, `This is a random color. ${color}`, 1000, setRandomColor, 500],
    loop: Infinity
  })
  return (
    <p ref={ref} style={{ color }}></p>
  )
}

export const BlinkCursor = () => {
  const ref = useRef(null);
  useTyping(ref, {
    steps: ['Hello', 1000, 'Hello world!', 500],
    loop: Infinity
  })
  return (
    <p ref={ref} className="typingWrapper"></p>
  )
}

export const RTL = () => {
  const ref = useRef(null);
  useTyping(ref, {
    steps: ['Hello', 1000, 'Hello world', 500],
    loop: Infinity
  })
  return (
    <p ref={ref} style={{ direction: 'rtl' }} className="typingWrapper"></p>
  )
}

export const Vertical = () => {
  const ref = useRef(null);
  useTyping(ref, {
    steps: ['天行贱，', 1000, '天行健，君子以自强不息；', 500, '天行健，君子以自强不息；地势坤，', 1000, '天行健，君子以自强不息；地势坤，君子以厚德载物。', 500],
    loop: 4
  })
  return (
    <div style={{ height: 100, display: 'flex', justifyContent: 'flex-end' }}>
      <p ref={ref} style={{ writingMode: 'vertical-rl' }} className="typingWrapper"></p>
    </div>
  )
}

export const ChinesePoetry = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  useTyping(ref1, {
    steps: ['Hiding from the rain and snow'],
    loop: Infinity
  })

  useTyping(ref2, {
    steps: [1000, `Trying to forget but I won't let go`],
    loop: Infinity
  })

  return (
    <>
      <p ref={ref1}></p>
      <p ref={ref2}></p>
    </>
  )
}

