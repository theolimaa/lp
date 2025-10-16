import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { toast } from '@/components/ui/use-toast';
const SimulatorSection = () => {
  const [inputs, setInputs] = useState({
    initialValue: '',
    monthlyContribution: '',
    currentAge: '',
    retirementAge: ''
  });
  const [results, setResults] = useState(null);
  const handleInputChange = e => {
    const {
      name,
      value
    } = e.target;
    setInputs(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const validateInputs = () => {
    const {
      initialValue,
      monthlyContribution,
      currentAge,
      retirementAge
    } = inputs;
    if (!initialValue || !monthlyContribution || !currentAge || !retirementAge) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive"
      });
      return false;
    }
    if (parseInt(currentAge) < 18 || parseInt(currentAge) > 99) {
      toast({
        title: "Erro",
        description: "Idade atual deve ser entre 18 e 99.",
        variant: "destructive"
      });
      return false;
    }
    if (parseInt(retirementAge) <= parseInt(currentAge) || parseInt(retirementAge) > 100) {
      toast({
        title: "Erro",
        description: "Idade de aposentadoria deve ser maior que a idade atual e no máximo 100.",
        variant: "destructive"
      });
      return false;
    }
    return true;
  };
  const handleSimulation = () => {
    if (!validateInputs()) return;
    const P = parseFloat(inputs.initialValue);
    const PMT = parseFloat(inputs.monthlyContribution);
    const currentAge = parseInt(inputs.currentAge);
    const retirementAge = parseInt(inputs.retirementAge);
    const i = 0.01; // 1% monthly interest rate
    const n = (retirementAge - currentAge) * 12;
    const data = [];
    let fvCompounded = P;
    let fvSimple = P;
    for (let month = 1; month <= n; month++) {
      fvCompounded = fvCompounded * (1 + i) + PMT;
      fvSimple += PMT;
      if (month % 12 === 0 || month === n) {
        const year = currentAge + Math.ceil(month / 12);
        data.push({
          year: year,
          'Investindo': fvCompounded,
          'Apenas guardando': fvSimple
        });
      }
    }
    const finalValue = P * Math.pow(1 + i, n) + PMT * ((Math.pow(1 + i, n) - 1) / i);
    setResults({
      finalValue: finalValue,
      data: data
    });
  };
  const formatCurrency = value => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };
  return <section id="simulator" className="py-20 px-4 bg-antiflash-white">
      <div className="container mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8
      }} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-oxford-blue mb-4">Simule sua independência financeira</h2>
        </motion.div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-8 items-start">
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="lg:col-span-1 bg-white p-8 rounded-2xl shadow-lg border border-gray-200 space-y-4">
            <div>
              <label className="text-sm font-medium text-oxford-blue/80">Valor inicial de patrimônio (R$)</label>
              <input type="number" name="initialValue" placeholder="Ex: 100.000" value={inputs.initialValue} onChange={handleInputChange} className="w-full mt-1 px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg text-oxford-blue focus:outline-none focus:border-dark-goldenrod transition-colors" />
            </div>
            <div>
              <label className="text-sm font-medium text-oxford-blue/80">Aportes mensais (R$)</label>
              <input type="number" name="monthlyContribution" placeholder="Ex: 1.000" value={inputs.monthlyContribution} onChange={handleInputChange} className="w-full mt-1 px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg text-oxford-blue focus:outline-none focus:border-dark-goldenrod transition-colors" />
            </div>
            <div>
              <label className="text-sm font-medium text-oxford-blue/80">Idade atual</label>
              <input type="number" name="currentAge" placeholder="Ex: 30" value={inputs.currentAge} onChange={handleInputChange} className="w-full mt-1 px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg text-oxford-blue focus:outline-none focus:border-dark-goldenrod transition-colors" />
            </div>
            <div>
              <label className="text-sm font-medium text-oxford-blue/80">Idade que pretende se aposentar</label>
              <input type="number" name="retirementAge" placeholder="Ex: 60" value={inputs.retirementAge} onChange={handleInputChange} className="w-full mt-1 px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg text-oxford-blue focus:outline-none focus:border-dark-goldenrod transition-colors" />
            </div>
            <Button onClick={handleSimulation} className="w-full bg-dark-goldenrod hover:bg-dark-goldenrod/90 text-antiflash-white font-semibold py-6 text-lg transition-all hover:scale-105">
              Simular meu futuro
            </Button>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-lg border border-gray-200 min-h-[400px] flex flex-col items-center justify-center">
            <AnimatePresence mode="wait">
              {results ? <motion.div key="results" initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} exit={{
              opacity: 0
            }} className="w-full text-center">
                  <p className="text-lg text-oxford-blue/80">Você terá aproximadamente:</p>
                  <p className="text-4xl font-bold text-dark-goldenrod my-2">{formatCurrency(results.finalValue)}</p>
                  <p className="text-md text-oxford-blue/80 mb-8">Ao se aposentar, investindo com uma estratégia inteligente.</p>
                  
                  <div style={{
                width: '100%',
                height: 300
              }}>
                    <ResponsiveContainer>
                      <LineChart data={results.data} margin={{
                    top: 5,
                    right: 20,
                    left: 20,
                    bottom: 30
                  }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                        <XAxis dataKey="year" label={{
                      value: 'Idade',
                      position: 'insideBottom',
                      offset: -5,
                      dy: 10
                    }} stroke="#1B2637" />
                        <YAxis tickFormatter={value => new Intl.NumberFormat('pt-BR', {
                      notation: 'compact',
                      compactDisplay: 'short'
                    }).format(value)} stroke="#1B2637" />
                        <Tooltip formatter={value => formatCurrency(value)} />
                        <Legend verticalAlign="bottom" wrapperStyle={{paddingTop: '20px'}}/>
                        <Line type="monotone" dataKey="Investindo" stroke="#B58E40" strokeWidth={3} dot={false} />
                        <Line type="monotone" dataKey="Apenas guardando" stroke="#8884d8" strokeWidth={2} dot={false} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  <p className="text-xs text-gray-500 mt-4">*Esse gráfico representa apenas uma simulação, sem garantia de ganhos e promessas desses resultados*</p>
                  <div className="mt-8">
                    <a href="https://wa.me/message/UZZHBP7KOC5AJ1" target="_blank" rel="noopener noreferrer">
                      <Button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-6 text-lg transition-all hover:scale-105">
                        Dê o primeiro passo para começar
                      </Button>
                    </a>
                  </div>
                </motion.div> : <motion.div key="placeholder" initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} exit={{
              opacity: 0
            }} className="text-center text-oxford-blue/60">
                  <p>Preencha os campos ao lado para simular seu futuro financeiro.</p>
                </motion.div>}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default SimulatorSection;