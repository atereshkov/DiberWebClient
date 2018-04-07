export class Address {

  id: number;
  name: string;
  postalCode: string;
  country: string;
  city: string;
  region: string;
  address: string;
  phone: string;
  userId: number;
  latitude: number;
  longitude: number;

  constructor(id: number, name: string, postalCode: string, country: string, city: string,
              region: string, address: string, phone: string, userId: number) {
    this.id = id;
    this.name = name;
    this.postalCode = postalCode;
    this.country = country;
    this.city = city;
    this.region = region;
    this.address = address;
    this.phone = phone;
    this.userId = userId;
  }

  constructor(id: number, name: string, postalCode: string, country: string, city: string,
              region: string, address: string, phone: string, userId: number, latitude: number, longitude: number) {
    this.id = id;
    this.name = name;
    this.postalCode = postalCode;
    this.country = country;
    this.city = city;
    this.region = region;
    this.address = address;
    this.phone = phone;
    this.userId = userId;
    this.latitude = latitude;
    this.longitude = longitude;
  }

}
