const formatData = (data:string) => {
    const arrayData = data.split(" ");
    const dataFormatada = `${arrayData[1]} ${arrayData[2]} ${arrayData[3]}`;
    return dataFormatada;
};

export default formatData;
