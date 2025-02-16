**Тест-кейсы**

- **Позитивные тест-кейсы**

    1. Отправить корректное объявление
       1) Отправить корректное объявление POST запросом на эндпоинт https://qa-internship.avito.com/api/1/item
      Ожидаемый результат: сообщение  "status": "Сохранили объявление - 'ID объявления' "

    2. Найти корректное объявление по его id       
         1) Создать корректное объявление POST запросом на https://qa-internship.avito.com/api/1/item
         2) Из ответа получить id созданного объявления
         3) По полученному id найти созданное объявление GET запросом на https://qa-internship.avito.com/api/item/${id}
      
         Ожидаемый результат:  объявление было создано успешно
                         объявление было успешно найдено по своему id
                         поля найденного объявления соответствуют тем, что были отправлены

    3. Найти корректное объявление по его sellerId
      
         Предусловие: Создать корректное(ые) объявление(я) с конкретным sellerId POST запросом на https://qa-internship.avito.com/api/1/item
         1) По sellerId найти созданное объявление GET запросом на https://qa-internship.avito.com/api/${sellerId}/item
      
         Ожидаемый результат:  объявление было создано успешно
                          объявление было успешно найдено по своему sellerId
                          поля найденного объявления соответствуют тем, что были отправлены
    4. Убедиться в уникальности формирующихся id объявлений
         1) Создать два корректных объявления POST запросами на https://qa-internship.avito.com/api/1/item
         2) Получить id этих объявлений
         
         Ожидаемый результат:  id созданных объявлений не совпадают



    - **Негативные тест-кейсы**
        1. Некорректный sellerId
            1) Отправить POST запрос с sellerId вне диапазона 111111-999999 на эндпоинт https://qa-internship.avito.com/api/1/item
        
            Ожидаемый результат: код ошибки 400

        2. Параметр sellerId как строка
              1) Отправить POST запрос с полем sellerId из буквенных символов на эндпоинт https://qa-internship.avito.com/api/1/item
        
            Ожидаемый результат: код ошибки 400

        3. Параметр sellerId отрицательный
              1) Отправить POST запрос с полем sellerId из отрицательного числа на эндпоинт https://qa-internship.avito.com/api/1/item
            
            Ожидаемый результат: код ошибки 400

        4. Пустой sellerId
           1) Отправить POST запрос с пустым полем sellerId на эндпоинт https://qa-internship.avito.com/api/1/item
        
            Ожидаемый результат: код ошибки 400

        5.  Запрос без sellerId
           1) Отправить POST запрос без sellerId на эндпоинт https://qa-internship.avito.com/api/1/item
            
            Ожидаемый результат: код ошибки 400

        6. Пустой name
           1) Отправить POST запрос с пустым полем name на эндпоинт https://qa-internship.avito.com/api/1/item
         
            Ожидаемый результат: код ошибки 400

        7. Слишком длинный name
              1) Отправить POST запрос с полем name из 50 буквенных символов на эндпоинт https://qa-internship.avito.com/api/1/item
         
            Ожидаемый результат: код ошибки 400

        8.  Запрос без name
               1) Отправить POST запрос без name на эндпоинт https://qa-internship.avito.com/api/1/item
        
            Ожидаемый результат: код ошибки 400

        9.  Пустой price
               1) Отправить POST запрос с пустым полем price на эндпоинт https://qa-internship.avito.com/api/1/item
            
            Ожидаемый результат: код ошибки 400

        10. Слишком длинный price
              1) Отправить POST запрос с полем price из 100 численных символов на эндпоинт https://qa-internship.avito.com/api/1/item
            
            Ожидаемый результат: код ошибки 400

        11. Параметр price как строка
              1) Отправить POST запрос с полем price из буквенных символов на эндпоинт https://qa-internship.avito.com/api/1/item
        
            Ожидаемый результат: код ошибки 400

        12. Параметр price отрицательный
              
              1) Отправить POST запрос с полем price из из отрицательного числа на эндпоинт https://qa-internship.avito.com/api/1/item
        
            Ожидаемый результат: код ошибки 400

        13.  Запрос без price
           
               1) Отправить POST запрос без price на эндпоинт https://qa-internship.avito.com/api/1/item
        
             Ожидаемый результат: код ошибки 400

        14. Пустой statistics
           
               1) Отправить POST запрос с пустым полем name на эндпоинт https://qa-internship.avito.com/api/1/item
            
            Ожидаемый результат: код ошибки 400

        15.  Запрос без statistics
               1) Отправить POST запрос без name на эндпоинт https://qa-internship.avito.com/api/1/item
         
             Ожидаемый результат: код ошибки 400

        16. Отрицательный contacts
              1) Отправить POST запрос с отрицательным contacts на эндпоинт https://qa-internship.avito.com/api/1/item
        
            Ожидаемый результат: код ошибки 400

        17. Отрицательный likes
              1) Отправить POST запрос с отрицательным likes на эндпоинт https://qa-internship.avito.com/api/1/item
         
            Ожидаемый результат: код ошибки 400

        18. Отрицательный viewCount
              1) Отправить POST запрос с отрицательным viewCount на эндпоинт https://qa-internship.avito.com/api/1/item
        
            Ожидаемый результат: код ошибки 400

        19. Пустой contacts

             1) Отправить POST запрос с пустым полем contacts на эндпоинт https://qa-internship.avito.com/api/1/item
            
            Ожидаемый результат: код ошибки 400

        20. Пустой likes
               1) Отправить POST запрос с пустым полем likes на эндпоинт https://qa-internship.avito.com/api/1/item
        
            Ожидаемый результат: код ошибки 400

        21. Пустой viewCount
               1) Отправить POST запрос с пустым полем viewCount на эндпоинт https://qa-internship.avito.com/api/1/item
            
            Ожидаемый результат: код ошибки 400

        22. Параметр contacts как строка
              1) Отправить POST запрос с полем contacts из буквенных символов на эндпоинт https://qa-internship.avito.com/api/1/item
        
            Ожидаемый результат: код ошибки 400

        23. Параметр likes как строка
              1) Отправить POST запрос с полем likes из буквенных символов на эндпоинт https://qa-internship.avito.com/api/1/item
         
            Ожидаемый результат: код ошибки 400

        24. Параметр viewCount как строка
              1) Отправить POST запрос с полем viewCount из буквенных символов на эндпоинт https://qa-internship.avito.com/api/1/item
         
            Ожидаемый результат: код ошибки 400

        25. Запрос без contacts
               1) Отправить POST запрос без contacts на эндпоинт https://qa-internship.avito.com/api/1/item
        
            Ожидаемый результат: код ошибки 400

        26. Запрос без likes
               1) Отправить POST запрос без likes на эндпоинт https://qa-internship.avito.com/api/1/item
         
            Ожидаемый результат: код ошибки 400

        27. Запрос без viewCount
               1) Отправить POST запрос без viewCount на эндпоинт https://qa-internship.avito.com/api/1/item
        
            Ожидаемый результат: код ошибки 400

        28. Запрос с несуществующим id
               1) Отправить GET запрос с несуществующим id на эндпоинт https://qa-internship.avito.com/api/item/${id}

            Ожидаемый результат: 
            сообщение

                  {
                     "result": {
                     "message": "item "ID объявления"  not found",
                     "messages": null
                     },                                              
                     "status": "404"
                  }

        29.  Запрос с некорректным id
       1) Отправить GET запрос с некорректным id на эндпоинт https://qa-internship.avito.com/api/item/${id}
            
            Ожидаемый результат: сообщение 
            
                  {
                     "result": {
                     "message": "передан некорректный идентификатор объявления",
                     "messages": {}
                     },
                     "status": "400"
                  } 

