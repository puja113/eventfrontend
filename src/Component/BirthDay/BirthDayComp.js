import React, { useEffect, useState } from 'react';
import 'animate.css';
import Carousel from 'react-bootstrap/Carousel';
import Player from './player'
import { useParams } from 'react-router-dom';
export default function BirthDayComp() {

const {id} = useParams();

const [eventData , setEventData] = useState([])
  
  function ImportAllImages(r) {
    let images = {};
    r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
    return images;
  };

  // const [data,setData]=useState({
  //   name:"Mayank",
  //   image:"djskdjskd",
  //   image2:"shdhsjdhsj"
  // })
  
  useEffect(() => {
    fetch(`https://web-five-dusky.vercel.app/getEventDetailsById/?userId=${id}`)
    .then((response) => response.json())
    .then((jsonResponse) => {
      //console.log(jsonResponse,"getEvent")
    setEventData({ data: jsonResponse?.events })

   })
  },[])
  useEffect(() => {
    // helper functions
    const PI2 = Math.PI * 2
    const random = (min, max) => Math.random() * (max - min + 1) + min | 0
    const timestamp = _ => new Date().getTime()


    
    // container
    class Birthday {
      constructor() {
        this.resize()

        // create a lovely place to store the firework
        this.fireworks = []
        this.counter = 0

      }

      resize() {
        this.width = canvas.width = window.innerWidth
        let center = this.width / 2 | 0
        this.spawnA = center - center / 4 | 0
        this.spawnB = center + center / 4 | 0

        this.height = canvas.height = window.innerHeight
        this.spawnC = this.height * .1
        this.spawnD = this.height * .5

      }

      onClick(evt) {
        let x = evt.clientX || evt.touches && evt.touches[0].pageX
        let y = evt.clientY || evt.touches && evt.touches[0].pageY

        let count = random(3, 5)
        for (let i = 0; i < count; i++) this.fireworks.push(new Firework(
          random(this.spawnA, this.spawnB),
          this.height,
          x,
          y,
          random(0, 260),
          random(30, 110)))

        this.counter = -1

      }

      update(delta) {
        ctx.globalCompositeOperation = 'hard-light'
        ctx.fillStyle = `rgba(20,20,20,${7 * delta})`
        ctx.fillRect(0, 0, this.width, this.height)

        ctx.globalCompositeOperation = 'lighter'
        for (let firework of this.fireworks) firework.update(delta)

        // if enough time passed... create new new firework
        this.counter += delta * 3 // each second
        if (this.counter >= 1) {
          this.fireworks.push(new Firework(
            random(this.spawnA, this.spawnB),
            this.height,
            random(0, this.width),
            random(this.spawnC, this.spawnD),
            random(0, 360),
            random(30, 110)))
          this.counter = 0
        }

        // remove the dead fireworks
        if (this.fireworks.length > 1000) this.fireworks = this.fireworks.filter(firework => !firework.dead)

      }
    }

    class Firework {
      constructor(x, y, targetX, targetY, shade, offsprings) {
        this.dead = false
        this.offsprings = offsprings

        this.x = x
        this.y = y
        this.targetX = targetX
        this.targetY = targetY

        this.shade = shade
        this.history = []
      }
      update(delta) {
        if (this.dead) return

        let xDiff = this.targetX - this.x
        let yDiff = this.targetY - this.y
        if (Math.abs(xDiff) > 3 || Math.abs(yDiff) > 3) { // is still moving
          this.x += xDiff * 2 * delta
          this.y += yDiff * 2 * delta

          this.history.push({
            x: this.x,
            y: this.y
          })

          if (this.history.length > 20) this.history.shift()

        } else {
          if (this.offsprings && !this.madeChilds) {

            let babies = this.offsprings / 2
            for (let i = 0; i < babies; i++) {
              let targetX = this.x + this.offsprings * Math.cos(PI2 * i / babies) | 0
              let targetY = this.y + this.offsprings * Math.sin(PI2 * i / babies) | 0

              birthday.fireworks.push(new Firework(this.x, this.y, targetX, targetY, this.shade, 0))

            }

          }
          this.madeChilds = true
          this.history.shift()
        }

        if (this.history.length === 0) this.dead = true
        else if (this.offsprings) {
          for (let i = 0; this.history.length > i; i++) {
            let point = this.history[i]
            ctx.beginPath()
            ctx.fillStyle = 'hsl(' + this.shade + ',100%,' + i + '%)'
            ctx.arc(point.x, point.y, 1, 0, PI2, false)
            ctx.fill()
          }
        } else {
          ctx.beginPath()
          ctx.fillStyle = 'hsl(' + this.shade + ',100%,50%)'
          ctx.arc(this.x, this.y, 1, 0, PI2, false)
          ctx.fill()
        }

      }
    }

    let canvas = document.getElementById('birthday')
    let ctx = canvas.getContext('2d')

    let then = timestamp()

    let birthday = new Birthday
    window.onresize = () => birthday.resize()
    document.onclick = evt => birthday.onClick(evt)
    document.ontouchstart = evt => birthday.onClick(evt);
     (function loop() {
        requestAnimationFrame(loop)

        let now = timestamp()
        let delta = now - then

        then = now
        birthday.update(delta / 1000)


      })()
  }, [])
  const [isTabVisible, setIsTabVisible] = useState(true);
  useEffect(() => {
    setInterval(function () {
      document.visibilityState === 'hidden' ? setIsTabVisible(false):setIsTabVisible(true)
  }, 1000);
  }, []);
  const images = ImportAllImages(require.context('../../Assets/Images/', false, /\.(png|jpe?g|svg|gif)$/));

  return (
    <>
      <div className='birthdayBody'>
        <canvas id="birthday"></canvas>
        <section id="topWrap">
          <div className='topIcon'>
            <span>{isTabVisible&&<Player />}</span>
            <span><a target='_blank' href="https://maps.app.goo.gl/DSuRoBAYcnpyJGaK6?g_st=iw"><img src={images['location_icon.png']} /></a></span>
          </div>

          <div className='topHeading'>
            <div className='invited_text'>
              <h3 className='animate__animated animate__fadeIn'>You’re Invited To   <img src={images['dinkar40.png']} /></h3>
              <img className='profile_img animate__animated animate__pulse' src={images['profile_pic.png']} />
            </div>
            <p className='starText animate__animated animate__slideInUp'> <img src={images['starIcon.png']} /> +1 </p>
            <div className='birthday_text animate__animated animate__fadeInUp'>
              <img src={images['40th_Birthday_pic.png']} />
              <img src={images['Party.png']} />
            </div>
            <div className='scroll_content'>
              <img className='animate__animated animate__heartBeat animate__infinite	infinite' src={images['scroll_down.png']} />
              <p>scroll down for More Details</p>
            </div>
          </div>
        </section>
        <section id="dateWrap">
          <p>To be celebrated on</p>
          <img src={images['7_march.png']} />
        </section>
        <section id="CrausleWrap">
          <h3>Location : KOHU</h3>
          <img src={images['slider3.jpeg']} />
          <p>KOHU, 13, Third Floor, and terrace, NWA, Extn, Punjabi Bagh, New Delhi, Delhi, 110026</p>
          <button><a href="https://maps.app.goo.gl/DSuRoBAYcnpyJGaK6?g_st=iw" target='_blank'>Direction to Venue</a></button>
        </section>
        <footer id="footerWarp">
          <img src={images['lets_make.png']} />
          <img src={images['dinkar_text.png']} />
          <img src={images['check_export.png']} />
          <Carousel fadem interval={1000} controls={false} c indicators={false}>
            <Carousel.Item>
              <img src={images['footerSelfie.jpeg']} />
            </Carousel.Item>
            <Carousel.Item>
              <img src={images['party1.jpeg']} />
            </Carousel.Item>
            <Carousel.Item>
              <img src={images['party2.jpeg']} />
            </Carousel.Item>
            <Carousel.Item>
              <img src={images['party3.jpeg']} />
            </Carousel.Item>
            <Carousel.Item>
              <img src={images['party4.jpeg']} />
            </Carousel.Item>
          </Carousel>
        </footer>
      </div>
      <div className='footer_stripe'>
        <a href='/'><img src={images['logo.gif']} /></a>
      </div>
    </>
  )
}
