const openBlock =()=>{
    document.getElementById('block').style.display = 'block';
    document.getElementById('workoutClose').style.display = 'block';
    document.getElementById('workoutOpen').style.display = 'none';

    
}

const closeBlock = () => {
    document.getElementById('block').style.display = 'none';
    document.getElementById('workoutClose').style.display = 'none';
    document.getElementById('workoutOpen').style.display = 'block';
}


