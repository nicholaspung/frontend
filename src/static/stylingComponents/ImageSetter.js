import health from "../images/cards/health.jpg";
import technology from "../images/cards/technology.jpg";
import fitness from "../images/cards/fitness1.jpg";
import personal from "../images/cards/personal.jpg";
import science from "../images/cards/science1.jpg";
import finance from "../images/cards/finance.jpg";




const category = [
    { name: "health", value: health, icon:'local_hospital'},
    { name: "technology", value: technology, icon:'settings_remote' },
    { name: "fitness", value: fitness, icon:'directions_run' },
    { name: "personal", value: personal, icon:'person' },
    { name: "science", value: science, icon:'eco' },
    { name: "finance", value: finance, icon:'equalizer' }
  ];


export const staticImage = (image_category) =>{
    const cat = category.find(
        item => item.name === image_category.toLowerCase()
      );
      return cat.value;
}

export const staticIcon = (image_category) =>{
    const cat = category.find(
      item => item.name === image_category.toLowerCase()
    );
    return cat.icon;
}
