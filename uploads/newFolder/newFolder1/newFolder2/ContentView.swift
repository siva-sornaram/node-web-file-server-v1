//
//  ContentView.swift
//  test
//
//  Created by Vicky on 27/10/21.
//

import SwiftUI

struct ContentView: View {
    
    @State private var playerCard = "card2"
    @State private var cpuCard = "card3"
    @State private var playerScore = 0
    @State private var cpuScore = 0
    
    var body: some View {
        ZStack {
            Image("background").ignoresSafeArea()
            VStack {
                Spacer()
                Image("logo")
                Spacer()
                HStack {
                    Image(playerCard).padding()
                    Image(cpuCard).padding()
                }
                Spacer()
                
                Button(action: {
                    
                    let playerRand = Int.random(in: 2...14)
                    let cpuRand = Int.random(in: 2...14)
                    
                    playerCard = "card" + String(playerRand)
                    cpuCard = "card" + String(cpuRand)
                    
                    if (playerRand > cpuRand) {
                        playerScore += 1
                    } else {
                        cpuScore += 1
                    }
                    
                    if (playerScore == 20) {
                        ResultView()
                        playerScore = 0
                        cpuScore = 0
                    }
                    
                    if (cpuScore == 20) {
                        ResultView()
                        playerScore = 0
                        cpuScore = 0
                    }
                    
                }) {
                    Image("dealbutton")
                }
                
                Spacer()
                HStack {
                    Spacer()
                    VStack {
                        Text("Player").font(.title).fontWeight(.semibold).foregroundColor(Color.orange).multilineTextAlignment(.center).padding()
                        Text(String(playerScore)).font(.largeTitle).fontWeight(.semibold).foregroundColor(Color.white).multilineTextAlignment(.center).padding()
                    }
                    Spacer()
                    VStack {
                        Text("CPU").font(.title).fontWeight(.semibold).foregroundColor(Color.orange).multilineTextAlignment(.center).padding()
                        Text(String(cpuScore)).font(.largeTitle).fontWeight(.semibold).foregroundColor(Color.white).multilineTextAlignment(.center).padding()
                    }
                    Spacer()
                }
                Spacer()
            }
            
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
            .previewInterfaceOrientation(.portrait)
    }
}
