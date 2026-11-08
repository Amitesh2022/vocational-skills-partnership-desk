<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { RouterLink, RouterView } from 'vue-router'
import { useDeliveryStore } from './store'
const store = useDeliveryStore()
const { approvedShare, offers, urgent } = storeToRefs(store)
onMounted(store.load)
</script>

<template><div class="shell"><aside><div class="brand">SkillsBridgeEU<span>VET PARTNERSHIPS</span></div><nav><RouterLink to="/">Partnership cases</RouterLink><RouterLink to="/insights">Delivery guidance</RouterLink></nav><div class="health"><i /> Java skills service connected</div></aside><main><header><div><span class="eyebrow">Connect vocational providers and strategic industries around job-ready training</span><h1>Vocational Skills Partnership Desk</h1></div><button @click="store.addOffer">Add partnership case</button></header><section class="summary"><article><small>Cases approved</small><strong>{{ approvedShare }}%</strong><div class="bar"><span :style="{ width: `${approvedShare}%` }" /></div></article><article><small>Cases tracked</small><strong>{{ offers.length }}</strong><p>Shared partnership view</p></article><article><small>Urgent skills gaps</small><strong>{{ urgent }}</strong><p>Needs attention</p></article></section><RouterView /></main></div></template>
