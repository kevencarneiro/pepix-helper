<template>
  <div class="home">
    <a-form>
      <a-form-item label="Idade">
        <a-input v-model="model.idade" type="number"></a-input>
      </a-form-item>
      <a-form-item label="Sexo">
        <a-radio-group v-model="model.sexo">
          <a-radio-button :value="Sexo.Masculino">Masculino</a-radio-button>
          <a-radio-button :value="Sexo.Feminino">Feminino</a-radio-button>
        </a-radio-group>
      </a-form-item>
      <a-button type="primary" @click="calcular()">
        Calcular
      </a-button>
    </a-form>
    <div v-if="calculado">
      <div :key="PEPrevisto">O valor de <strong>PE máximo previsto</strong> é de {{PEPrevisto}}.</div>
      <div :key="PIPrevisto">O valor de <strong>PI máximo previsto</strong> é de {{PIPrevisto}}.</div>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";
  import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
  import {Sexo} from "@/enums/Sexo";

  @Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  private Sexo = Sexo;
  private model: Individuo = new Individuo();
  private calculado: boolean = false;
  private PEPrevisto: number | null = null;
  private PIPrevisto: number | null = null;

  private calcular(): void {
    // Vue.set(this, 'PEPrevisto', this.calcularPE(this.model.idade, this.model.sexo));
    // Vue.set(this, 'PIPrevisto', this.calcularPI(this.model.idade, this.model.sexo));
    this.PEPrevisto = this.calcularPE(this.model.idade, this.model.sexo);
    this.PIPrevisto = this.calcularPI(this.model.idade, this.model.sexo);
    this.calculado = true;
  }

  private calcularPI(idade: number, sexo: Sexo): number {
    return sexo === Sexo.Masculino
      ? -0.8 * idade + 155.3
      : -0.49 * idade + 110.4;
  }

  private calcularPE(idade: number, sexo: Sexo): number {
    return sexo === Sexo.Masculino
      ? -0.81 * idade + 165.3
      : -0.61 * idade + 115.6;
  }
}

export class Individuo {
  public sexo!: Sexo;
  public idade!: number;
}
</script>

<style lang="scss">
</style>
