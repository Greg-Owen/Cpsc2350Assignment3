import React from 'react';
import me from './Images/me.jpg';

const Main = () => {
  return (
    <main>
      <div id="home">
        <img src={require('./Images/me.jpg')} height="20%" width="20%"></img>
        <h1 ><strong>Who am I?</strong></h1>
      </div>
      <p>
      I am a second-year computer science student at Langara College, currently residing
               in the Metro Vancouver area. My academic focus includes a strong foundation in computer
                science, with a keen interest in data structures and algorithms. In my free time, I
                 enjoy staying active, having played soccer in my youth and being a former member of
                a swimming club. Additionally, I am bilingual, fluent in both English and French,
                 allowing me to communicate effectively in diverse environments.
      </p>
      <div>
        <p>Im currently learning react by making this website whilst following this tutorial, please check it out it is very useful.</p>
        <iframe width="640" height="360" src="https://www.youtube.com/embed/w7ejDZ8SWv8" title="React JS Crash Course" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <br></br><a href="https://www.youtube.com/watch?v=w7ejDZ8SWv8&t=815s">Link to video</a>
        <p>I have a github profile where this page will be uploaded: <a href="https://github.com/Greg-Owen">My profile</a></p>
      </div>
      <div id="skills">
        <h1>What can I do?</h1>
        <p>
          As I mentioned in the section above I'm currently learning how to use <a href="https://legacy.reactjs.org/tutorial/tutorial.html">react JS</a>. I am always trying to improve my abilities and broaden my skillset. You can find a more comprehensive list down below.
        </p>
        <h3>Technical Skills</h3><br></br>
        <strong>Programming Languages</strong>: Java, C++, JavaScript, Python<br></br>
        <strong>Web Development</strong>: HTML, CSS<br></br>
        <strong>Data Structures</strong>: Graphs, Trees, Skiplists, Linked Lists<br></br>
        <strong>Algorithms</strong>: Proficient in coding and analyzing complexities<br></br>
        <strong>Front End</strong>: Learning front-end development<br></br>
        <strong>Tools and Libraries</strong>: Standard Template Library (STL)<br></br>
        <h3>Soft Skills<br></br></h3>
        <ul>
          <li>Strong problem-solving abilities<br></br></li>
          <li>Effective communication and collaboration<br></br></li>
          <li>Detail-oriented and highly organized<br></br></li>
          <li>Adaptable and quick learner<br></br></li>
        </ul>
        <h3>Current Projects<br></br></h3>
        <ul>
          <li>I am currently working in a team of four on a project for this course. It is called <a href="https://github.com/Team-Lorem-Ipsum/PCBee">PcBee</a>, a pc 
            parts search site which incorporates both ChatGPT and eBay API's.</li>
          <li>I have also been working on and off on a personal multiplayer platformer game which I am building 
            from scratch. It has yet to be uploaded to github but here is a screenshot of it:<br></br>
            <img src={require('./Images/PlatformerPrototypeScreenShot.png')} height="40%" width="60%"></img></li>
        </ul>

      </div>
      <div id="education">
        <h1>What have I learned?</h1>
        <img src={require('./Images/langara.jpg')} height="20%" width="20%"></img>
        <p>
          I'm currently studying at <a href="https://langara.ca/">Langara College</a> where I am a second year computer science student. Before I 
          started studying computer science I took a year of applied science and engineering, so not only does my coursework include data structures and algorithms, 
          computer languages, and programming; but also includes physics, mathematics, and business & project management. I expected to transfer a university after 
          my second year is over and graduate in 2026. 
        </p>
      </div>
        
    </main>
  )
}

export default Main
