<template>
    <div class="home">
        <a-card title="Informações básicas">
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
                <a-button type="primary" :disabled="model.idade <= 0 || !model.sexo " @click="calcular()">
                    Calcular
                </a-button>
            </a-form>
        </a-card>
        <a-card v-if="calculado" title="Valores Previstos">
            <h4 :key="PEPrevisto">O valor de <strong>PE máximo previsto</strong> é de {{(PEPrevisto).toFixed(2)}} CmH2O.</h4>
            <h4 :key="PIPrevisto">O valor de <strong>PI máximo previsto</strong> é de -{{(Math.abs(PIPrevisto)).toFixed(2)}} CmH2O.</h4>
        </a-card>
        <a-card v-if="calculado" title="Valores Calculados">
            <a-form>
                <a-form-item label="PE Calculado">
                    <a-input v-model="PECalculado" type="number"></a-input>
                </a-form-item>
                <a-form-item label="PI Calculado">
                    <a-input v-model="PICalculado" type="number"></a-input>
                </a-form-item>
                <a-button :disabled="PECalculado <= 0 || PICalculado <= 0" type="primary"
                          @click="exibirProporcao = true">
                    Calcular Proporção
                </a-button>
            </a-form>
        </a-card>
        <a-card v-if="exibirProporcao" title="Calculado x Previsto">
            <h4><strong>PE Calculado:</strong> {{(PECalculado * 100 / PEPrevisto).toFixed(2)}}% do PE Previsto</h4>
            <h4><strong>PI Calcluado:</strong> {{(PICalculado * 100 / PIPrevisto).toFixed(2)}}% do PI Previsto</h4>
        </a-card>
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
    private exibirProporcao: boolean = false;
    private PEPrevisto: number | null = null;
    private PIPrevisto: number | null = null;
    private PECalculado: number | null = null;
    private PICalculado: number | null = null;

    private calcular(): void {
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
    .ant-card {
        margin: 20px;
    }
</style>
