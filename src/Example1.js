import React, { Component } from "react";
import datas from "./datas";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
const news_posts = datas.headline;

class Example1 extends Component {
  render() {
    return (
      <div>
        {news_posts.reverse().map((s) => (
          <div class="blog-card">
            <div class="meta">
              <div class="photo">
                {" "}
                <img src={s.link} />
              </div>

              <ul class="details">
                <li class="author">
                  <a href="#">John Doe</a>
                </li>
                <li class="date">Aug. 24, 2015</li>
                <li class="tags">
                  <ul>
                    <li>
                      <a href="#">Learn</a>
                    </li>
                    <li>
                      <a href="#">Code</a>
                    </li>
                    <li>
                      <a href="#">HTML</a>
                    </li>
                    <li>
                      <a href="#">CSS</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div class="description">
              <h1>{s.title}</h1>
              <h2>
                <a href={s.tag}>{s.tag}</a>
              </h2>
              <p>{s.content}</p>
              <p class="read-more">
                <a href={s.read_more} target="_blank">
                  Read More
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default Example1;
