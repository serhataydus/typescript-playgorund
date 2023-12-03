  describe("Delay Tests", () => {
    it('delay function waits for the specified time', async () => {
        // Beklenen gecikme süresi
        const delayTime = 1000; // 1 saniye
      
        // Fonksiyonun başlangıç zamanını al
        const startTime = Date.now();
      
        // delay fonksiyonunu çağır ve belirtilen süre boyunca beklet
        await delay(delayTime);
      
        // Beklenen süre boyunca geçen toplam süreyi hesapla
        const elapsedTime = Date.now() - startTime;
      
        // Gerçekleşen süre, belirlenen gecikme süresine yakın olmalıdır
        expect(elapsedTime).toBeGreaterThanOrEqual(delayTime - 10); // Hafif bir tolerans ile
        expect(elapsedTime).toBeLessThan(delayTime + 10); // Hafif bir tolerans ile
      });
  });