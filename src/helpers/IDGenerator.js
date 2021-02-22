const idChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'];

const IDGenerator = () => {
    return (
        Math.floor(Math.random() * 10000) +
        Math.floor(Math.random() * idChars.length) +
        idChars[Math.floor(Math.random() * idChars.length)]
    );
};

export default IDGenerator;
