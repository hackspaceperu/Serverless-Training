class user{
  constructor(userInformation,accountInformation){
    this.userInformation=userInformation,
    this.accountInformation=accountInformation
  }
  createProfile(name,image) {
    return {'name': name,'image': image}
  }
  deleteUser(){
    this = null
    delete this
  }
}
class userInformation{
  constructor(name,email,password,phoneNumber){
    this.name=name,
    this.email=email,
    this.password=password,
    this.phoneNumber=phoneNumber
  }
  editProperty(property,newValue){
    this[property] =  newValue
  }
}
class accountInformation{
  constructor(creditCard,membership,language){
    this.creditCard=creditCard,
    this.membership=membership,
    this.language=language
  }
  editProperty(property,newValue){
    this[property] =  newValue
  }
}

class movie{
  constructor(title, details,storyLine,description,tags){
    this.title = title,
    this.details=details,
    this.storyLine=storyLine,
    this.description=description,
    this.tags=tags
  }
  editProperty(property,newValue){
    this[property] =  newValue
  }
}
class series{
  constructor(title, details,storyLine,seasons,tags){
    this.title = title,
    this.details=details,
    this.storyLine=storyLine,
    this.seasons=seasons
  }
}
class details{
  constructor(cast,director,genres,writers,motionPictureRating,awards,createdBy){
    this.cast=cast,
    this.director=director||createdBy,
    this.genres=genres,
    this.writers=writers,
    this.motionPictureRating=motionPictureRating,
    this.awards=awards
  }
}