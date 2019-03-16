<template> 
  <div>
    <section class="section">
      <div class="container">
        <h1 class="title is-3">
          makeAR
        </h1>
        <p class="subtitle is-5">
          ARマーカーを作ろう
        </p>
      </div>
    </section>  
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <b-field label="図形タイプ">
              <b-tabs type="is-toggle">
                <b-tab-item label="丸・円" icon="circle" />
                <b-tab-item label="四角形" icon="square" />
                <b-tab-item label="いろいろ" icon="shape" />
              </b-tabs>
            </b-field>
            <b-field label="マーカータイプ">
              <div class="block">
                <b-radio 
                  v-model="markerStatus.markerStyleType"
                  native-value="random"
                >
                  ランダム
                </b-radio>
                <b-radio 
                  v-model="markerStatus.markerStyleType"
                  native-value="straight"
                >
                  整列された
                </b-radio>
              </div>
            </b-field>
            <button 
              class="button"
            >
              つくる
            </button>
          </div>
          <div class="column" />
        </div>
      </div>
    </section>
    
    <section class="section" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      markerStatus: {
        markeramounts: 0,
        markerShapeType: '',
        markerStyleType: ''
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.control {
  margin-bottom: 5%;
}
</style>
