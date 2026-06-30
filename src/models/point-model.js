export default class PointModel {
  constructor(mockPoints){
    this.points = [...mockPoints];
  }

  getPoints(){
    return this.points;
  }
}
