import React from "react";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import WorkIcon from "@material-ui/icons/Work";
import GroupWorkIcon from "@material-ui/icons/GroupWork";

export default function ComplainsCard() {

    return (
        <div>
            <article class="Complain_card light blue">

                <div class="Complain_card__text t-dark">
                    <h1 class="Complain_card__title blue">Complain Title</h1>
                    <div class="Complain_card__subtitle small">
                        <time datetime="2020-05-25 12:00:00">
                            <CalendarTodayIcon/> Mon, May 25th 2020
                        </time>
                    </div>
                    <div class="Complain_card__bar"></div>
                    <div class="Complain_card__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
                    <ul class="Complain_card__tagbox">
                        <li class="tag__item"> <WorkIcon/> Department</li>
                        <li class="tag__item color3"> <GroupWorkIcon/> Department</li>
                    </ul> 
                </div>
            </article>
        </div>
    );
}