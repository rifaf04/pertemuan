const moment = require('moment');
const mongoose = require('mongoose');

const user1Id = mongoose.Types.ObjectId();
const user2Id = mongoose.Types.ObjectId();
const user3Id = mongoose.Types.ObjectId();

const meetup1Id = mongoose.Types.ObjectId();
const meetup2Id = mongoose.Types.ObjectId();
const meetup3Id = mongoose.Types.ObjectId();
const meetup4Id = mongoose.Types.ObjectId();
const meetup5Id = mongoose.Types.ObjectId();
const meetup6Id = mongoose.Types.ObjectId();

const thread1Id = mongoose.Types.ObjectId();
const thread2Id = mongoose.Types.ObjectId();
const thread3Id = mongoose.Types.ObjectId();

const post1Id = mongoose.Types.ObjectId();
const post2Id = mongoose.Types.ObjectId();
const post3Id = mongoose.Types.ObjectId();
const post4Id = mongoose.Types.ObjectId();
const post5Id = mongoose.Types.ObjectId();

const category1Id = mongoose.Types.ObjectId();
const category2Id = mongoose.Types.ObjectId();
const category3Id = mongoose.Types.ObjectId();
const category4Id = mongoose.Types.ObjectId();
const category5Id = mongoose.Types.ObjectId();
const category6Id = mongoose.Types.ObjectId();

module.exports = {
  "meetups": [
     {
      "_id": meetup1Id,
      "location": "Area Gedung Pendopo dan Alun-alun garut",
      "processedLocation": "Area Gedung Pendopo dan Alun-alun garut",
      "title": "Pekan Raya Kabupaten Garut 2019",
      "image": "https://jadwalevent.web.id/wp-content/uploads/2019/02/PEKAN-RAYA-KAB.GARUT-2019.jpg",
      "description": "Dalam Rangka Memeriahkan HARI JADI GARUT KE-206.",
      "shortInfo": "Dalam Rangka Memeriahkan HARI JADI GARUT KE-206. Bertempat di Area Gedung Pendopo dan Alun-alun Garut pada tanggal 21-24 Februari 2019.",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "startDate": moment().add(2, 'days').toISOString(),
      "timeFrom": "07.00",
      "timeTo": "16.00",
      "joinedPeopleCount": 1,
      "status": "active",
      "category": category1Id,
      "joinedPeople": [user2Id],
      "meetupCreator": user1Id
    },
    {
      "_id": meetup2Id,
      "location": "Garut, Jawa Barat",
      "processedLocation": "Garut",
      "title": "Test",
      "image": "https://images.unsplash.com/photo-1526906004573-b4a4fcd642fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      "description": "test",
      "shortInfo": "info test",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "startDate": moment().add(7, 'days').toISOString(),
      "timeFrom": "08:00",
      "timeTo": "10:00",
      "joinedPeopleCount": 2,
      "status": "active",
      "category": category2Id,
      "joinedPeople": [user3Id],
      "meetupCreator": user2Id
    },
    {
      "_id": meetup3Id,
      "location": "Gedung Sasakadana Garut, Jl. Patriot No.07",
      "processedLocation": "Gedung Sasakadana Garut, Jl. Patriot No.07",
      "title": "Job Fair Garut",
      "image": "https://jadwalevent.web.id/wp-content/uploads/2018/03/Job-Fair-Garut-Maret-2018.jpg",
      "description": "Bagi kalian yang sedang mencari pekerjaan, bisa langsung datang ke acara Bursa Kerja yang diadakan oleh Dinas Tenaga Kerja & Transmigrasi Kabupaten Garut. Bursa kerja ini akan diikuti oleh kurang lebih 15 Perusahaan dan tersedia Ratusan Lowongan untuk kalian (terbuka untuk umum & semua jurusan).",
      "shortInfo": "Bursa Kerja – Dinas Tenaga Kerja Kabupaten Gartut",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "startDate": moment().add(7, 'days').toISOString(),
      "timeFrom": "08:00",
      "timeTo": "10:00",
      "joinedPeopleCount": 2,
      "status": "active",
      "category": category3Id,
      "joinedPeople": [user1Id, user3Id],
      "meetupCreator": user2Id
    },
    {
      "_id": meetup4Id,
      "location": "Annarto Mall, Jalan Perintis Kemerdekaan, Haurpanggung, Garut Regency, West Java, Indonesia",
      "processedLocation": "Annarto Mall, Jalan Perintis Kemerdekaan, Haurpanggung, Garut Regency, West Java, Indonesia",
      "title": "New Aquaman",
      "image": "https://www.wonderfulwestjava.com/storage/app/uploads/public/5d5/e17/38a/thumb_1088_350_210_0_0_crop.jpg",
      "description": "Festival Musik Kolaborasi Etnis Tingkat Jawa Barat diselenggarakan dalam rangka Pelestarian dan Pemberdayaan Seni Tradisional di Jawa Barat. Penyelenggara kegiatan tersebut adalah Dinas Pariwisata dan Kebudayaan Kabupaten Garut.",
      "shortInfo": "Just some short info",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "startDate": moment().add(7, 'days').toISOString(),
      "timeFrom": "09:00",
      "timeTo": "16:00",
      "joinedPeopleCount": 1,
      "status": "active",
      "category": category4Id,
      "joinedPeople": [user1Id, user3Id],
      "meetupCreator": user2Id
    },
    {
      "_id": meetup5Id,
      "location": "Pendopo Kabupaten Garut",
      "processedLocation": "Garut",
      "title": "Festival Baso Aci",
      "image": "https://img.antaranews.com/cache/800x533/2019/05/02/IMG_20190502_180955.jpg.webp",
      "description": "Memperkenalkan baso aci di daerah garut",
      "shortInfo": "info singkat baso aci",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "startDate": moment().add(7, 'days').toISOString(),
      "timeFrom": "08:00",
      "timeTo": "10:00",
      "joinedPeopleCount": 2,
      "status": "active",
      "category": category6Id,
      "joinedPeople": [user1Id, user3Id],
      "meetupCreator": user2Id
    },
    {
      "_id": meetup6Id,
      "location": "Ciatel",
      "processedLocation": "Garut",
      "title": "Festival Garut Colour Run",
      "image": "https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2019/12/10/850880168.jpg",
      "description": "Prepare Festival Garut Colour Run",
      "shortInfo": "Info Prepare",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "startDate": moment().add(7, 'days').toISOString(),
      "timeFrom": "08:00",
      "timeTo": "10:00",
      "joinedPeopleCount": 2,
      "status": "active",
      "category": category1Id,
      "joinedPeople": [user1Id, user3Id],
      "meetupCreator": user2Id
    }
  ],
  "users": [
    {
      "_id": user1Id,
      "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuqyc3j2s3bL4DIkC8uC9h0rcAdsDXcwJPNh8XHWbLQfHbOpVU",
      "email": "rifa@gmail.com",
      "name": "Rifa1997",
      "info": "Mahasiswa",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "username": "rifa1997",
      "password": "rifa1997",
      joinedMeetups: [meetup3Id, meetup4Id, meetup5Id, meetup6Id]
    },
    {
      "_id": user2Id,
      "avatar": "https://www.clipartmax.com/png/middle/195-1956720_%5B-img%5D-avatar.png",
      "email": "riyanto@gmail.com",
      "name": "Riyanto",
      "info": "Bla bla bla bla",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "username": "Riyanto,ST.MT",
      "password": "testtest1",
      joinedMeetups: [meetup1Id]
    },
    {
      "_id": user3Id,
      "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuqyc3j2s3bL4DIkC8uC9h0rcAdsDXcwJPNh8XHWbLQfHbOpVU",
      "email": "heri@gmail.com",
      "name": "Heri19",
      "info": "test",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "username": "Heri19",
      "password": "testtest2",
      joinedMeetups: [meetup2Id, meetup3Id, meetup4Id, meetup5Id, meetup6Id]
    }
  ],
  "threads": [
    {
      "_id": thread1Id,
      "title": "Apakah Ada Snack atau makanan?",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "meetup": meetup1Id,
      "user": user1Id,
      "posts": [post1Id, post2Id]
    },
    {
      "_id": thread2Id,
      "title": "Ada.",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "meetup": meetup2Id,
      "user": user2Id,
      "posts": [post3Id, post4Id]
    },
    {
      "_id": thread3Id,
      "title": "Tunggu.",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "meetup": meetup2Id,
      "user": user2Id,
      "posts": [post5Id]
    }
  ],
  "posts": [
    {
      "_id": post1Id,
      "text": "Sedang Dimana",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "thread": thread1Id,
      "user": user1Id
    },
    {
      "_id": post2Id,
      "text": "Lagi Di jalan",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "thread": thread1Id,
      "user": user1Id
    },
    {
      "_id": post3Id,
      "text": "Sebentar Lagi Samppai",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "thread": thread2Id,
      "user": user2Id,
    },
    {
      "_id": post4Id,
      "text": "Tunggu",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "thread": thread2Id,
      "user": user2Id,
    },
    {
      "_id": post5Id,
      "text": "Masuk",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "thread": thread3Id,
      "user": user2Id,
    }
  ],
  "categories": [
    {
      "_id": category1Id,
      "name": "Lomba",
      "image": "https://jadwalevent.web.id/wp-content/uploads/2019/02/PEKAN-RAYA-KAB.GARUT-2019.jpg"
    },{
      "_id": category2Id,
      "name": "Pameran",
      "image": "https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      "image2": "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80",
      "image3": "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    },
    {
      "_id": category3Id,
      "name": "Job Fair Garut",
      "image": "https://jadwalevent.web.id/wp-content/uploads/2018/03/Job-Fair-Garut-Maret-2018.jpg"
    },
    {
      "_id": category4Id,
      "name": "Garut Etnik Festival",
      "image": "https://www.wonderfulwestjava.com/storage/app/uploads/public/5d5/e17/38a/thumb_1088_350_210_0_0_crop.jpg"
    },
    {
      "_id": category5Id,
      "name": "rapat",
      "image": "https://1.bp.blogspot.com/-TIqSir2zhMo/V9imGANnHdI/AAAAAAAADAQ/UprdyBhuBNcZDOpIiRj5PZwYdGG39Im-gCLcB/s1600/Rapat%2BPembahasanlintas%2BKab.%2BGarut1.jpg"
    },
    {
      "_id": mongoose.Types.ObjectId(),
      "name": "literature",
      "image": "https://images.unsplash.com/photo-1490633874781-1c63cc424610?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
    },
    {
      "_id": category6Id,
      "name": "food",
      "image": "https://images.unsplash.com/photo-1536510233921-8e5043fce771?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1542&q=80"
    },
    {
      "_id": mongoose.Types.ObjectId(),
      "name": "games",
      "image": "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
    }
  ]
};