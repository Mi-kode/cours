class TestJob < ApplicationJob
  queue_as :default

  def perform(*args)
    puts "Hello, je suis un job exécuté en arrière-plan avec Solid Queue !"
  end
end
