import React from "react";
import { BannerFull } from "../../components/Banner/BannerFull";

import NewsCard from "../../components/Card/NewsCard";
import useHomeStyle from "./style";

function Home() {
  const classes = useHomeStyle();

  return (
    <div>
      <BannerFull />
      <article className={classes.articleContainer}>
        <div className={classes.homeContainer}>
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <div className={classes.calendar}>
            <table>
              <tr>
                <th>Lịch thi đấu</th>
              </tr>
              <tr>
                <td>
                  <div className={classes.rowTable}>
                    <div className={classes.date}>
                      <p>06-03</p>
                    </div>
                    <div className={classes.raceCourse}>vn</div>
                    <div className={classes.raceCourse}>
                      <p>2K international circuit</p>
                    </div>
                    <div className={classes.ticket}>
                      <i class="fa fa-ticket-alt"></i>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className={classes.rowTable}>
                    <div className={classes.date}>
                      <p>06-03</p>
                    </div>
                    <div className={classes.raceCourse}>vn</div>
                    <div className={classes.raceCourse}>
                      <p>2K international circuit</p>
                    </div>
                    <div className={classes.ticket}>
                      <i class="fa fa-ticket-alt"></i>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className={classes.rowTable}>
                    <div className={classes.date}>
                      <p>06-03</p>
                    </div>
                    <div className={classes.raceCourse}>vn</div>
                    <div className={classes.raceCourse}>
                      <p>2K international circuit</p>
                    </div>
                    <div className={classes.ticket}>
                      <i class="fa fa-ticket-alt"></i>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className={classes.rowTable}>
                    <div className={classes.date}>
                      <p>06-03</p>
                    </div>
                    <div className={classes.raceCourse}>vn</div>
                    <div className={classes.raceCourse}>
                      <p>2K international circuit</p>
                    </div>
                    <div className={classes.ticket}>
                      <i class="fa fa-ticket-alt"></i>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className={classes.rowTable}>
                    <div className={classes.date}>
                      <p>06-03</p>
                    </div>
                    <div className={classes.raceCourse}>vn</div>
                    <div className={classes.raceCourse}>
                      <p>2K international circuit</p>
                    </div>
                    <div className={classes.ticket}>
                      <i class="fa fa-ticket-alt"></i>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className={classes.rowTable}>
                    <div className={classes.date}>
                      <p>06-03</p>
                    </div>
                    <div className={classes.raceCourse}>vn</div>
                    <div className={classes.raceCourse}>
                      <p>2K international circuit</p>
                    </div>
                    <div className={classes.ticket}>
                      <i class="fa fa-ticket-alt"></i>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className={classes.rowTable}>
                    <div className={classes.date}>
                      <p>06-03</p>
                    </div>
                    <div className={classes.raceCourse}>vn</div>
                    <div className={classes.raceCourse}>
                      <p>2K international circuit</p>
                    </div>
                    <div className={classes.ticket}>
                      <i class="fa fa-ticket-alt"></i>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className={classes.rowTable}>
                    <div className={classes.date}>
                      <p>06-03</p>
                    </div>
                    <div className={classes.raceCourse}>vn</div>
                    <div className={classes.raceCourse}>
                      <p>2K international circuit</p>
                    </div>
                    <div className={classes.ticket}>
                      <i class="fa fa-ticket-alt"></i>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className={classes.rowTable}>
                    <div className={classes.date}>
                      <p>06-03</p>
                    </div>
                    <div className={classes.raceCourse}>vn</div>
                    <div className={classes.raceCourse}>
                      <p>2K international circuit</p>
                    </div>
                    <div className={classes.ticket}>
                      <i class="fa fa-ticket-alt"></i>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className={classes.rowTable}>
                    <div className={classes.date}>
                      <p>06-03</p>
                    </div>
                    <div className={classes.raceCourse}>vn</div>
                    <div className={classes.raceCourse}>
                      <p>2K international circuit</p>
                    </div>
                    <div className={classes.ticket}>
                      <i class="fa fa-ticket-alt"></i>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className={classes.rowTable}>
                    <div className={classes.date}>
                      <p>06-03</p>
                    </div>
                    <div className={classes.raceCourse}>vn</div>
                    <div className={classes.raceCourse}>
                      <p>2K international circuit</p>
                    </div>
                    <div className={classes.ticket}>
                      <i class="fa fa-ticket-alt"></i>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className={classes.rowTable}>
                    <div className={classes.date}>
                      <p>06-03</p>
                    </div>
                    <div className={classes.raceCourse}>vn</div>
                    <div className={classes.raceCourse}>
                      <p>2K international circuit</p>
                    </div>
                    <div className={classes.ticket}>
                      <i class="fa fa-ticket-alt"></i>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
      </article>
    </div>
  );
}
export default Home;
