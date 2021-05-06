<template>
    <v-container>
        <section class="articles">

            <div class="articles-filter">
                <p>Фильтр</p>
                <v-select
                        :items="items"
                        v-model="select"
                        dense
                        item-text="val"
                        item-value="key"
                ></v-select>
            </div>

            <div class="articles-list">
                <!-- <NuxtLink :to="`/articles/` + `some-article-alias`"> -->
                <div class="article-preview">
                    <div class="article-metadata">
                        <div class="articles-categories">

                        </div>
                        <div class="article-date"></div>
                    </div>
                    <div class="article-thumbnail">
                        <img src="" alt="">
                    </div>
                    <div class="article-details">
                        <h2 class="article-title">Some article title</h2>
                        <p class="article-announce">Some announcing part of article content</p>

                        <LinkArrowed :text="`Читать`" :link="{ path: '/articles/' + 'some-article-alias'  }"/>

                    </div>
                </div>
                <!-- </NuxtLink> -->
            </div>

        </section>
    </v-container>
</template>

<script>
    import ﻿﻿LinkArrowed from '/components/links/LinkArrowed'

    export default {
        components: {
            LinkArrowed
        },
        name: "portfolio",
        layout: "default",
        data: () => ({
            select: {key: "all", val: "Все записи"},
            items: [
                {key: "all", val: "Все записи"},
                {key: "news", val: "Новости"},
                {key: "articles", val: "Статьи"}
            ]
        })
    };
</script>
