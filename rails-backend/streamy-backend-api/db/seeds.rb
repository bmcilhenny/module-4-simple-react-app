# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Stream.destroy_all
s1 = Stream.create(title: 'Fortnite 17 Win Streak', user: "RamiGaming", stream_url: "https://youtu.be/nLg6TwyPQwI", description: "I am a beast with the SCAR", time: "65")
s2 = Stream.create(title: 'Fortnite 1st Place in the world', user: "RamiGaming", stream_url: "https://youtu.be/A2TX6VF5vZ4", description: "No one can stop me", time: "31")
s3 = Stream.create(title: 'Best of Andy Milonakis 2017 (Twitch Livestream)', user: "Andy Milonakis", stream_url: "https://youtu.be/1PM2udZP1dg", description: "Best of Andy Milonakis 2017 twitch win and funny moment", time: "31")
s4 = Stream.create(title: 'SOULIVE, Anders Osborne, Porter Jr. & Friends - Bowlive 6 Night 6 LIVE SET @ Brooklyn Bowl - 3/19/15', user: "Soulive", stream_url: "https://youtu.be/C26AfRdPULM", description: "Annual Bowlive residency at the Brooklyn Bowl", time: "108")
