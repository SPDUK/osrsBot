Shoes.app title: 'OSRS Bot' do
  stack margin: 10 do
    button 'Start bot' do
      `node ~/OsrsBot/src/bot.js`
    end
  end
end
