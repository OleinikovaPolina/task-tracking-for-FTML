<template>
  <v-app class="app-background">
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title>Task tracking</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list-item
        class="my-purple"
        :style="{height: $vuetify.breakpoint.mdAndUp?'64px':'56px'}"
      >
        <v-list-item-content>
          <v-list-item-title class="font-weight-bold">
            Special
          </v-list-item-title>
          <v-list-item-subtitle>
            for FTML
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider />

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in navbar"
          :key="item.title"
          link
          :to="item.link"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container style="z-index: 1;position: relative">
        <router-view />
      </v-container>
    </v-main>
    <div
      v-for="(n,i) in items"
      :key="i"
      style="position: fixed;z-index: 0"
      :style="{top:n.y,left:n.x,transform:`rotate(${n.rotate})`}"
    >
      <v-icon
        :small="n.small"
        color="rgba(175,77,214,0.5)"
      >
        mdi-{{ n.type }}
      </v-icon>
    </div>
  </v-app>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import {DecorationInterface, NavbarInterface} from '@/interfaces'

@Component({
  name: 'App'
})
export default class App extends Vue {
  private navbar: Array<NavbarInterface> = [
    {title: 'Backlogs', icon: 'mdi-format-list-bulleted', link: '/'},
    {title: 'Sprints', icon: 'mdi-rotate-right', link: '/sprints'},
    {title: 'Relax', icon: 'mdi-dog', link: '/relax'},
  ]
  private drawer = false
  items: Array<DecorationInterface> = []

  mounted() {
    for (let i = 0; i < 20; i++) {
      this.items.push(this.getXY())
    }
  }

  getXY(): DecorationInterface {
    const {clientWidth, clientHeight} = document.documentElement
    let x = Math.round(Math.random() * (clientWidth - 30))
    let y = Math.round(Math.random() * (clientHeight - 30))
    let r = Math.round(Math.random() * 45)
    let t = Math.round(Math.random() * 2)
    let s = Math.round(Math.random() * 2)
    return {x: x + 'px', y: y + 'px', rotate: r + 'deg', small: s === 0, type: t === 0 ? 'circle-outline' : 'close'}
  }
}
</script>
