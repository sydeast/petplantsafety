require 'nokogiri'
require 'open-uri'
require 'pry'

class Scraper
    def scrape_plants_list

    # define the base url to compile the list of plants
    base_url = 'https://www.aspca.org/pet-care/animal-poison-control/cats-plant-list'

    # # the open method takes in our url string, and returns to us the HTML from that page
    # html = open(base_url)

    # # nokogiri 's HTML  method then takes in our html as an argument, and returns to us a set of nodes
    # doc = Nokogiri::HTML(html)
    # replace the previous doc variable with the entire open command. Need to troubleshoot the previous variables 
    doc = Nokogiri::HTML(URI.open(base_url))

    # set variable to equal opening the url, locate the first element with "view-content" as its classname and locate the <a href> element to get the list's page urls
    plantList = doc.css('.view-all-plants-list').css('a')

        
        # set a variable to an empty array (an array of plant urls in this case toxic)
        plant_urls = []
        # take the open url variables and with each...
        plantList.each do | plant|
            # ...set the url value of each plant to grab
            url = plant.attribute('href').value
            # append full url
            fullUrl ="https://www.aspca.org#{url}"
            # ...push the urls to the empty arrary
            plant_urls << fullUrl
            
        end

        # when done, move on to next step using the array of urls
        # find_plant_fullurls(plant_urls)
        scrape_plant_data(plant_urls)
    end


    def scrape_plant_data(plant_urls)

        #create list of plants array
        plants = []
        #define a variable to open each fullurl
        plant_urls.each do | fullUrl |
            page = Nokogiri::HTML(URI.open(fullUrl))
            name = page.css('.pane-1').text.strip
            additional_names = page.css('span:contains("Additional Common Names") ~ *').text.split(', ')
            scientific = page.css('span:contains("Scientific Name") ~ *').text
            family = page.css('span:contains("Family") ~ *').text
            #tell if plant is toxic
            toxic_principles = page.css('span:contains("Toxic Principles") ~ *').text
            clinical_signs = page.css('span:contains("Clinical Signs") ~ *').text
            isToxic = page.css('span:contains("Toxicity") ~ *').text

            
            # if isToxic =~ /Toxic/
            #     toxicity = true
            # else
            #     toxicity = false
            # end
            # if isToxic.include?("Non-Toxic to Dogs")
            #     toxic_dogs = false
            # else
            #     toxic_dogs = true
            # end
            # if isToxic.include?("Non-Toxic to Horses")
            #         toxic_horses = false
            #     else
            #         toxic_horses = true
            # end
            
            if isToxic.include?("Non-Toxic to Cats")
                toxic_cats = false
            else
                toxic_cats = true
            end

            if toxic_cats == true
                    toxicity = true
            else
                toxicity = false
            end


            plant_data = {
                name: name,
                additional_names: additional_names,
                toxic_principles: toxic_principles,
                scientific_name: scientific,
                family: family,
                toxicity: toxicity,
                clinical_signs: clinical_signs,
                toxic_cats: toxic_cats,
                # toxic_dogs: toxic_dogs,
                # toxic_horses: toxic_horses,
                toxic_to: isToxic
            }

            plants << plant_data

        end
         plants

    end
end